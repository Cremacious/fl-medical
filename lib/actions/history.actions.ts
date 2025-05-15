'use server';
import prisma from '../prisma';
import { auth } from '../auth';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import { purchaseSchema } from '../validators';

export async function addHistoryPurchase(data: z.infer<typeof purchaseSchema>) {
  try {
    const session = await auth();
    if (!session) {
      throw new Error('No logged-in user found.');
    }
    if (!session.user?.id) {
      throw new Error('No user ID found in session.');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    if (!existingUser) throw new Error('User not found');
    const purchase = purchaseSchema.parse(data);

    await prisma.purchase.create({
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

export async function getHistory() {
  try {
    const session = await auth();
    if (!session) {
      throw new Error('No logged-in user found.');
    }
    if (!session.user?.id) {
      throw new Error('No user ID found in session.');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }
    const history = await prisma.purchase.findMany({
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
    const session = await auth();
    if (!session) {
      throw new Error('No logged-in user found.');
    }
    if (!session.user?.id) {
      throw new Error('No user ID found in session.');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }
    const purchase = await prisma.purchase.findUnique({
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
    const session = await auth();
    if (!session) {
      throw new Error('No logged-in user found.');
    }
    if (!session.user?.id) {
      throw new Error('No user ID found in session.');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }
    const purchases = await prisma.purchase.findMany({
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
    const session = await auth();
    if (!session) {
      throw new Error('No logged-in user found.');
    }
    if (!session.user?.id) {
      throw new Error('No user ID found in session.');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }

    const purchase = await prisma.purchase.findUnique({
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
    await prisma.purchase.update({
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
