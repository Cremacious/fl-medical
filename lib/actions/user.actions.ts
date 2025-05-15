'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import { insertStashItemSchema, purchaseSchema } from '../validators';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signIn, signOut } from '@/lib/auth';
import { signInFormSchema, signUpFormSchema } from '@/lib/validators';
import { hashSync } from 'bcrypt-ts-edge';

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: 'Invalid email or password' };
  }
}

export async function signOutUser() {
  await signOut();
  console.log('clicked sign out');
}

export async function signUp(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      confirmPassword: formData.get('confirmPassword'),
      password: formData.get('password'),
    });

    const plainPassword = user.password;

    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn('credentials', {
      email: user.email,
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




// export async function addHistoryPurchase(data: z.infer<typeof purchaseSchema>) {
//   try {
//     const user = await auth();
//     if (!user) {
//       throw new Error('No logged-in user found.');
//     }
//     const existingUser = await prisma.user.findUnique({
//       where: {
//         clerkUserId: user.userId ?? undefined,
//       },
//     });
//     if (!existingUser) throw new Error('User not found');
//     const purchase = purchaseSchema.parse(data);

//     await prisma.purchase.create({
//       data: {
//         userId: existingUser.id,
//         dispensary: purchase.dispensary,
//         date: purchase.date,
//         total: purchase.items.reduce(
//           (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
//           0
//         ),
//         quantity: purchase.items.reduce(
//           (sum, item) => sum + (item.quantity ?? 0),
//           0
//         ),
//         purchaseItems: {
//           create: purchase.items.map((item) => ({
//             name: item.name,
//             category: item.category,
//             type: item.type,
//             size: item.size,
//             quantity: item.quantity,
//             price: item.price,
//             thc: parseFloat(item.thc ?? '0'),
//             cbd: parseFloat(item.cbd ?? '0'),
//             lineage: item.lineage,
//             details: item.details ?? '',
//           })),
//         },
//       },
//     });

//     revalidatePath('/dashboard/history');
//     return {
//       success: true,
//       message: `Purchase added to history`,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: formatError(error),
//     };
//   }
// }
