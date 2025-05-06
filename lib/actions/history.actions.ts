'use server';
import { currentUser, auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';

export async function getHistory() {
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
    const history = await db.purchase.findMany({
      where: {
        userId: existingUser.id,
      },
      include: {
        purchaseItems: true,
      },
    });
    return history.map((purchase) => ({
      id: purchase.id,
      dispensary: purchase.dispensary,
      date: new Date(purchase.date),
      items: purchase.purchaseItems,
      total: purchase.total, // Ensure `total` is included
    }));
  } catch (error) {
    return [];
  }
}
