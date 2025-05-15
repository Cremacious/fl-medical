'use server';
import prisma from '../prisma';
import { auth } from '../auth';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import { insertStashItemSchema } from '../validators';

export async function addStashItem(
  data: z.infer<typeof insertStashItemSchema>
) {
  try {
    const session = await auth();
    if (!session) throw new Error('Session not found');
    if (!session.user?.id) {
      throw new Error('User ID is undefined');
    }
    const existingUser = prisma.user.findUnique({
      where: {
        id: session.user?.id,
      },
    });
    if (!existingUser) throw new Error('No user found');
    const stashItem = insertStashItemSchema.parse(data);

    await prisma.stashItem.create({
      data: {
        ...stashItem,
        userId: session.user.id,
      },
    });
    revalidatePath('/dashboard/stash');
    return { success: true, message: `Item ${stashItem.name} added to stash` };
  } catch (error) {
    return {
      success: true,
      message: 'Error adding to stash.',
    };
  }
}

export async function getAllStashItems() {
  try {
    const session = await auth();
    if (!session) throw new Error('Session not found');
    if (!session.user?.id) {
      throw new Error('User ID is undefined');
    }
    const existingUser = prisma.user.findUnique({
      where: {
        id: session.user?.id,
      },
    });
    if (!existingUser) throw new Error('No user found');
    const stashItems = await prisma.stashItem.findMany({
      where: {
        userId: session.user.id,
      },
    });
    return stashItems;
  } catch (error) {
    return [];
  }
}

export async function getStashItemById(id: string) {
  try {
   const session = await auth()
   if (!session) throw new Error('No session found')
    if (!session.user?.id) throw new Error('User not found')

    const stashItem = await prisma.stashItem.findUnique({
      where: {
        id: id,
        userId: session.user.id
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

export async function editStashItem(
  id: string,
  data: z.infer<typeof insertStashItemSchema>
) {
  try {
    const session = await auth();
    if (!session) {
      throw new Error('No session found.');
    }
    if (!session.user?.id) throw new Error('No user found')
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user.id
      },
    });
    if (!existingUser) {
      throw new Error('User not found');
    }

    const stashItem = await prisma.stashItem.update({
      where: {
        id: id,
        userId: existingUser.id,
      },
      data: {
        ...data,
      },
    });

    revalidatePath('/dashboard/stash');

    return { success: true, message: `${stashItem.name} updated successfully` };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
