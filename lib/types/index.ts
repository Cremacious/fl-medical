import {
  insertStashItemSchema,
  purchaseSchema,
  purchaseItemSchema, postSchema
} from '../validators';
import { z } from 'zod';

export type StashItem = z.infer<typeof insertStashItemSchema>;
export type Purchase = z.infer<typeof purchaseSchema>;
export type PurchaseItem = z.infer<typeof purchaseItemSchema>;
export type Post = z.infer<typeof postSchema>

