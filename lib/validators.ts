import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(3, 'Email must be at least 3 characters'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
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

  userId: z.string().uuid().optional(),
  postId: z.string().uuid({ message: 'Invalid post ID' }).nullable().optional(),
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
  id: z.string().uuid().optional(),
  dispensary: z.string().min(1, { message: 'Dispensary is required' }),
  date: z.date({ required_error: 'Date is required' }),
  items: z
    .array(
      z.object({
        id: z.string().uuid().optional(),
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

export const postSchema = z.object({
  activity: z.string(),
  location: z.string().optional(),
  stashItems: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        type: z.string().optional(),
        category: z.string().optional(),
        size: z.string().optional(),
        thc: z.string().optional(),
        cbd: z.string().optional(),
        lineage: z.string().optional(),
        thoughts: z.string().optional(),
      })
    )
    .optional(),
  content: z.string().optional(),
  date: z.date(),
  id: z.string().optional(),
});
