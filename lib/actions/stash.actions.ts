'use server';
import { currentUser, auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';

export async function getAllStashItems() {
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
    const stashItems = await db.stashItem.findMany({
      where: {
        userId: existingUser.id,
      },
    });
    return stashItems;
  } catch (error) {
    return [];
  }
}

export async function getStashItemById(id: string) {
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

    const stashItem = await db.stashItem.findUnique({
      where: {
        id: id,
        userId: existingUser.id,
      },
    });

    if (!stashItem) {
      throw new Error('Stash item not found');
    }

    return stashItem;
  } catch (error) {
    throw new Error(formatError(error));
  }
}
