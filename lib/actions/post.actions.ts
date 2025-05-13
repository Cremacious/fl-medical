'use server';
import { z } from 'zod';
import { postSchema } from '../validators';
import { db } from '../db';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import { auth } from '@clerk/nextjs/server';

export async function createPost(data: z.infer<typeof postSchema>) {
  try {
    const user = await auth();
    if (!user) {
      throw new Error('User could not be found');
    }
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.userId ?? undefined,
      },
    });
    if (!existingUser) {
      throw new Error('Could not find user in database');
    }
    const validatedData = postSchema.parse(data);

    await db.post.create({
      data: {
        activity: validatedData.activity,
        location: validatedData.location,
        content: validatedData.content,
        date: validatedData.date,
        userId: existingUser.id,
        stashItems: {
          create: validatedData.stashItems?.map((item) => ({
            id: item.id,
            name: item.name,
            type: item.type,
            category: item.category,
            size: item.size,
            thc: item.thc,
            cbd: item.cbd,
            lineage: item.lineage,
            thoughts: item.thoughts,
            user: { connect: { id: existingUser.id } },
          })),
        },
      },
    });
    return {
      success: true,
      message: 'Post created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
