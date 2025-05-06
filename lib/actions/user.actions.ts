'use server';

import { currentUser, auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { insertStashItemSchema } from '../validators';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';

export const checkUserExists = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error('No logged-in user found.');
  }
  const existingUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (existingUser) {
    return existingUser;
  }
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      username: user.username || `user_${user.id}`,
      role: 'user',
    },
  });

  return newUser;
};

export async function addStashItem(
  data: z.infer<typeof insertStashItemSchema>
) {
  try {
    const user = await auth();
    if (!user) {
      throw new Error('No logged-in user found.');
    }
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.userId ?? undefined,
      },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }
    const stashItem = insertStashItemSchema.parse(data);
    await db.stashItem.create({
      data: {
        ...stashItem,
        userId: existingUser.id,
      },
    });
    revalidatePath('/dashboard/stash');
    return {
      success: true,
      message: `Item ${stashItem.name} added to stash`,
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
