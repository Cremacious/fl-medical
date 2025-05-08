import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    username: z.string().min(3, 'Name must be at least 3 characters'),
    password: z.string().min(3, 'Password must be at least 3 characters'),
    confirmPassword: z
      .string()
      .min(3, 'Confirm password must be at least 3 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const insertStashItemSchema = z.object({
  id: z.string().min(3, 'ID must be at least 3 characters').optional(),
  name: z.string().min(1, { message: 'Name is required' }),
  category: z.string().optional().or(z.literal('')),
  type: z.string().optional().or(z.literal('')),
  size: z.string().optional().or(z.literal('')),
  thc: z.string().optional().or(z.literal('')),
  cbd: z.string().optional().or(z.literal('')),
  lineage: z.string().optional().or(z.literal('')),
  thoughts: z.string().optional().or(z.literal('')),
  createdAt: z.date().optional(),
});

export const purchaseItemSchema = z.object({
  id: z.string().min(3, 'ID must be at least 3 characters'),
  name: z.string().min(1, { message: 'Name is required' }),
  category: z.string().optional(),
  type: z.string().optional(),
  size: z.string().optional(),
  quantity: z.number().optional(),
  price: z.number().optional(),
  thc: z.string().optional(),
  cbd: z.string().optional(),
  lineage: z.string().optional(),
  details: z.string().optional(),
});

export const purchaseSchema = z.object({
  id: z.string().uuid().optional(), // Make `id` optional
  dispensary: z.string().min(1, { message: 'Dispensary is required' }),
  date: z.date({ required_error: 'Date is required' }),
  items: z
    .array(
      z.object({
        id: z.string().uuid().optional(), // Make item `id` optional
        name: z.string().min(1, { message: 'Name is required' }),
        category: z.string().optional(),
        type: z.string().optional(),
        size: z.string().optional(),
        quantity: z.number().min(1, { message: 'Quantity is required' }),
        price: z.number().min(0, { message: 'Price is required' }),
        thc: z.string().optional(),
        cbd: z.string().optional(),
        lineage: z.string().optional(),
        details: z.string().optional(),
      })
    )
    .min(1, { message: 'At least one item is required' }),
  total: z.number().min(0, { message: 'Total is required' }),
});