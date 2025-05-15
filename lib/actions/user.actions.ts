'use server';

import { currentUser, auth } from '@clerk/nextjs/server';
// import { db } from '@/lib/db';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { formatError } from '../utils';
import { insertStashItemSchema, purchaseSchema } from '../validators';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signIn, signOut } from '@/lib/auth';
import { signInFormSchema } from '@/lib/validators';

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
}

// export const checkUserExists = async () => {
//   const user = await currentUser();
//   if (!user) {
//     throw new Error('No logged-in user found.');
//   }
//   const existingUser = await prisma.user.findUnique({
//     where: {
//       clerkUserId: user.id,
//     },
//   });

//   if (existingUser) {
//     return existingUser;
//   }
//   const newUser = await prisma.user.create({
//     data: {
//       clerkUserId: user.id,
//       username: user.username || `user_${user.id}`,
//       email: user.emailAddresses[0]?.emailAddress || '',
//       role: 'user',
//     },
//   });
//   console.log('newUser', newUser);
//   return newUser;
// };

// export async function addStashItem(
//   data: z.infer<typeof insertStashItemSchema>
// ) {
//   try {
//     const user = await auth();
//     if (!user) {
//       throw new Error('No logged-in user found.');
//     }
//     const existingUser = await prisma.user.findUnique({
//       where: {
//         userId: user.userId ?? undefined,
//       },
//     });
//     if (!existingUser) {
//       throw new Error('User not found');
//     }

//     const stashItem = insertStashItemSchema.parse({
//       ...data,
//       userId: existingUser.id,
//       postId: null,
//     });

//     await prisma.stashItem.create({
//       data: {
//         ...stashItem,
//         userId: stashItem.userId!,
//       },
//     });

//     revalidatePath('/dashboard/stash');
//     return {
//       success: true,
//       message: `Item ${stashItem.name} added to stash`,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: formatError(error),
//     };
//   }
// }

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
