'use server';

import { currentUser, auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import { insertStashItemSchema, purchaseSchema } from '../validators';

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
      email: user.emailAddresses[0]?.emailAddress || '',
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

export async function addHistoryPurchase(data: z.infer<typeof purchaseSchema>) {
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
    if (!existingUser) throw new Error('User not found');
    const purchase = purchaseSchema.parse(data);

    await db.purchase.create({
      data: {
        userId: existingUser.id,
        dispensary: purchase.dispensary,
        date: purchase.date,
        total: purchase.items.reduce(
          (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
          0
        ),
        quantity: purchase.items.reduce(
          (sum, item) => sum + (item.quantity ?? 0),
          0
        ),
        purchaseItems: {
          create: purchase.items.map((item) => ({
            name: item.name,
            category: item.category,
            type: item.type,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            thc: parseFloat(item.thc ?? '0'),
            cbd: parseFloat(item.cbd ?? '0'),
            lineage: item.lineage,
            details: item.details ?? '',
          })),
        },
      },
    });

    revalidatePath('/dashboard/history');
    return {
      success: true,
      message: `Purchase added to history`,
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
