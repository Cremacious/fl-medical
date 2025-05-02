import { insertStashItemSchema } from "../validators";
import {z} from "zod";


export type StashItem = z.infer<typeof insertStashItemSchema>;