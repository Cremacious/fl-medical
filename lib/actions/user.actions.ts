'use server';

import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

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
