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
  id: z.string().min(3, 'ID must be at least 3 characters'),
  name: z.string().min(1, { message: 'Name is required' }),
  category: z.string().min(1, { message: 'Category is required' }),
  type: z.string().min(1, { message: 'Type is required' }),
  size: z.string().min(1, { message: 'Size is required' }),
  thc: z.string().min(1, { message: 'THC is required' }),
  cbd: z.string().min(1, { message: 'CBD is required' }),
  lineage: z.string().min(1, { message: 'Lineage is required' }),
  thoughts: z.string().min(1, { message: 'Thoughts are required' }),
});

export const purchaseItemSchema = z.object({
  id: z.string().min(3, 'ID must be at least 3 characters'),
  name: z.string().min(1, { message: 'Name is required' }),
  category: z.string().min(1, { message: 'Category is required' }),
  type: z.string().min(1, { message: 'Type is required' }),
  size: z.string().min(1, { message: 'Size is required' }),
  quantity: z.number().min(1, { message: 'Quantity is required' }),
  price: z.number().min(0, { message: 'Price is required' }),
  thc: z.string().min(1, { message: 'THC is required' }),
  cbd: z.string().min(1, { message: 'CBD is required' }),
  lineage: z.string().min(1, { message: 'Lineage is required' }),
  details: z.string().optional(),
});

export const purchaseSchema = z.object({
  id: z.string().min(3, 'ID must be at least 3 characters'),
  dispensary: z.string().min(1, { message: 'Dispensary is required' }),
  date: z.date({ required_error: 'Date is required' }),
  items: z
    .array(purchaseItemSchema)
    .min(1, { message: 'At least one item is required' }),
  total: z.number().min(0, { message: 'Total is required' }),
});
