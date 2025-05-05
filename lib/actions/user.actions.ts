import { prisma } from '@/db/prisma';
import { signIn, useSession } from 'next-auth/react';
import { signUpFormSchema } from '../validators';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { hashSync } from 'bcrypt-ts-edge';

export async function signUpUser(data: z.infer<typeof signUpFormSchema>) {
  try {
    const user = signUpFormSchema.parse(data);
    // const user = signUpFormSchema.parse({
    //   username: formData.get('username'),
    //   password: formData.get('password'),
    //   confirmPassword: formData.get('confirmPassword'),
    // });
    const plainPassword = user.password;
    user.password = hashSync(user.password, 10); //fix
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
    console.log('User created successfully');
    return { success: true, message: 'User created successfully' };
  } catch (error) {
    // if (isRedirectError(error)) {
    //     throw error;
    //   }
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
}
