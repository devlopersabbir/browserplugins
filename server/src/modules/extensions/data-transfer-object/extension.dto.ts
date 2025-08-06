import { z } from "zod";
import {
  zId,
  zOptionalId,
  zDecimalString,
  zEnum,
  zSlug,
  zSemver,
  zOptionalUrl,
  zStringArray,
} from "@/utils";
import { browsers, extensionStatus } from "../extensions.schema";

export const extensionSchema = z.object({
  sellerId: zId("Seller ID"),
  categoryId: zOptionalId("Category ID"),

  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: zSlug(),

  description: z.string().min(10, "Description must be at least 10 characters"),
  shortDescription: z.string().max(255).optional(),

  price: zDecimalString(2),
  originalPrice: zDecimalString(2),

  version: zSemver(),
  browsers: z.array(zEnum(browsers, "Browser")).default([]),
  tags: zStringArray(),
  screenshots: zStringArray(),

  iconUrl: zOptionalUrl(),
  videoUrl: zOptionalUrl(),
  downloadUrl: zOptionalUrl().optional(),

  downloadCount: z.number().int().min(0).default(0),
  rating: zDecimalString(2).default("0.00"),
  reviewCount: z.number().int().min(0).default(0),

  status: zEnum(extensionStatus, "Status").default("draft"),
});
export type ExtensionSchema = z.infer<typeof extensionSchema>;
