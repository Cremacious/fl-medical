'use server';
import { prisma } from '@/db/prisma';
import { signIn, useSession } from 'next-auth/react';
import { signUpFormSchema } from '../validators';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { hashSync } from 'bcrypt-ts-edge';
import { formatError } from '../utils';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      username: formData.get('username'),
      confirmPassword: formData.get('confirmPassword'),
      password: formData.get('password'),
    });
    const plainPassword = user.password;
    user.password = hashSync(user.password, 10);
    await prisma.user.create({
      data: {
        username: user.username,
        password: user.password,
      },
    });
    await signIn('credentials', {
      username: user.username,
      password: plainPassword,
    });
    return { success: true, message: 'User created successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
}
