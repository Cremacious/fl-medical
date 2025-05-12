'use server';
import { currentUser, auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import { purchaseSchema } from '../validators';

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

export async function getPurchaseById(id: string) {
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
    const purchase = await db.purchase.findUnique({
      where: {
        id,
      },
      include: {
        purchaseItems: true,
      },
    });
    if (!purchase) {
      throw new Error('Purchase not found');
    }
    return purchase;
  } catch (error) {
    return null;
  }
}

export async function getAllPurchaseItemsFromHistory() {
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
    const purchases = await db.purchase.findMany({
      where: {
        userId: existingUser.id,
      },
      include: {
        purchaseItems: true,
      },
    });
    return purchases.flatMap((purchase) => purchase.purchaseItems);
  } catch (error) {
    return [];
  }
}

export async function editPurchase(
  id: string,
  data: z.infer<typeof purchaseSchema>
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

    const purchase = await db.purchase.findUnique({
      where: {
        id,
      },
      include: {
        purchaseItems: true,
      },
    });
    if (!purchase) {
      throw new Error('Purchase not found');
    }

    const parsedData = purchaseSchema.parse(data);

    const { items, ...purchaseData } = parsedData;

    const updateData = {
      ...purchaseData,
      purchaseItems: {
        upsert: items.map((item) => ({
          where: { id: item.id },
          update: {
            name: item.name,
            category: item.category,
            type: item.type,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            thc: item.thc ? parseFloat(item.thc) : null,
            cbd: item.cbd ? parseFloat(item.cbd) : null, 
            lineage: item.lineage,
            details: item.details,
          },
          create: {
            id: item.id,
            name: item.name,
            category: item.category,
            type: item.type,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            thc: item.thc ? parseFloat(item.thc) : null,
            cbd: item.cbd ? parseFloat(item.cbd) : null, 
            lineage: item.lineage,
            details: item.details,
          },
        })),
        deleteMany: purchase.purchaseItems
          .filter(
            (existingItem) => !items.some((item) => item.id === existingItem.id)
          )
          .map((item) => ({ id: item.id })),
      },
    };
    await db.purchase.update({
      where: {
        id,
      },
      data: updateData,
    });

    revalidatePath('/dashboard/history');
    return {
      success: true,
      message: 'Purchase updated successfully',
    };
  } catch (error) {
    console.error('Error updating purchase:', error);
    return { success: false, message: formatError(error) };
  }
}
