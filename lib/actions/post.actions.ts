'use server';
import { z } from 'zod';
import { postSchema } from '../validators';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import prisma from '../prisma';
import { auth } from '../auth';

export async function createPost(data: z.infer<typeof postSchema>) {
  try {
    const session = await auth();
    if (!session) throw new Error('Session not found');
    if (!session.user?.id) {
      throw new Error('User ID is undefined');
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user?.id,
      },
    });
    if (!existingUser) {
      throw new Error('Could not find user in database');
    }

    const validatedData = postSchema.parse(data);

    await prisma.post.create({
      data: {
        activity: validatedData.activity,
        location: validatedData.location,
        content: validatedData.content,
        date: validatedData.date,
        userId: existingUser.id,
        stashItems: validatedData.stashItems || [],
      },
    });

    revalidatePath('/dashboard/post');

    return {
      success: true,
      message: 'Post created successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function getAllUserPosts() {
  try {
    const session = await auth();
    if (!session) throw new Error('Session not found');
    if (!session.user?.id) {
      throw new Error('User ID is undefined');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user?.id,
      },
    });
    if (!existingUser) {
      throw new Error('Could not find user in database');
    }
    const posts = await prisma.post.findMany({
      where: {
        userId: existingUser.id,
      },
    });
    return posts;
  } catch (error) {
    return [];
  }
}

export async function getPostById(id: string) {
  try {
    const session = await auth();
    if (!session) throw new Error('Session not found');
    if (!session.user?.id) {
      throw new Error('User ID is undefined');
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: session.user?.id,
      },
    });
    if (!existingUser) {
      throw new Error('Could not find user in database');
    }
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return post;
  } catch (error) {
    return null;
  }
}
