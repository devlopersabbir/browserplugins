import { z } from "zod";

export const categoriesSchema = z.object({
  name: z.string().min(1),
  slug: z.string().optional(),

  description: z.string().min(1),
  icon: z.url().optional(),
  sortOrder: z.number().default(0),
});

export type CategoriesSchema = z.infer<typeof categoriesSchema>;
