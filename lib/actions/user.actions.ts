'use server';

import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export const checkUserExists = async () => {
  // Get the current logged-in user from Clerk
  const user = await currentUser();

  // Check if a Clerk user is logged in
  if (!user) {
    throw new Error('No logged-in user found.');
  }

  // Check if the user already exists in the database
  const existingUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If the user already exists, return the existing user
  if (existingUser) {
    return existingUser;
  }

  // Create a new user in the database
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      username: user.username || `user_${user.id}`,
      password: '',
      role: 'user',
    },
  });

  return newUser;
};
