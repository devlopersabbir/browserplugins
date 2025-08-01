import { baseSchema } from "@/utils/db-utility";
import { relations } from "drizzle-orm";
import { index, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";

const categories = pgTable(
  "categories",
  {
    ...baseSchema,
    name: text("name").notNull().unique(),
    slug: text("slug").notNull().unique(),
    description: text("description"),
    icon: text("icon"),
    sortOrder: integer("sort_order").default(0),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => ({
    slugIdx: index("categories_slug_idx").on(table.slug),
  }),
);

export const categoriesRelations = relations(categories, ({ many }) => ({
  extensions: many(extensions),
}));
export default categories;
