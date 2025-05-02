import { z } from 'zod';

export const insertStashItemSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  category: z.string().min(1, { message: 'Category is required' }),
  type: z.string().min(1, { message: 'Type is required' }),
  size: z.string().min(1, { message: 'Size is required' }),
  thc: z.string().min(1, { message: 'THC is required' }),
  cbd: z.string().min(1, { message: 'CBD is required' }),
  lineage: z.string().min(1, { message: 'Lineage is required' }),
  thoughts: z.string().min(1, { message: 'Thoughts are required' }),
});
