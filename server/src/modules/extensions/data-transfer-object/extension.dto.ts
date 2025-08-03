import { z } from "zod";
import { browsers, extensionStatus } from "../extensions.schema";

export const extensionSchema = z.object({
  name: z.string().min(1),
  slug: z.string().optional(),

  sellerId: z.number(),
  categoryId: z.number(),

  description: z.string().min(1),
  shortDescription: z.string().optional(),

  price: z.string().regex(/^\d{1,8}(\.\d{1,2})?$/, "Invalid price format"),
  version: z.string().min(1),

  browsers: z.array(z.enum(browsers)).default(["chrome"]),
  tags: z.array(z.string()).optional(),
  iconUrl: z.url().optional(),
  screenshots: z.array(z.string()).optional(),
  videoUrl: z.url().optional(),
  downloadUrl: z.url().optional(),

  downloadCount: z.number().int().nonnegative().default(0),
  rating: z
    .string()
    .regex(/^\d{1}(\.\d{1,2})?$/, "Invalid rating format")
    .default("0.00"),

  reviewCount: z.number().int().nonnegative().optional(),
  status: z.enum(extensionStatus).optional(),
});

export type ExtensionSchema = z.infer<typeof extensionSchema>;
