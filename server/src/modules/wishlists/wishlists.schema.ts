import { index, integer, pgTable, uniqueIndex } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import users from "../users/users.schema";
import { baseSchema } from "@/utils/db-utility";
import { relations } from "drizzle-orm";

const wishlists = pgTable(
  "wishlists",
  {
    ...baseSchema,
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    extensionId: integer("extension_id")
      .notNull()
      .references(() => extensions.id, { onDelete: "cascade" }),
  },
  (table) => ({
    userExtensionIdx: uniqueIndex("wishlists_user_extension_idx").on(
      table.userId,
      table.extensionId,
    ),
    userIdIdx: index("wishlists_user_id_idx").on(table.userId),
  }),
);
export const wishlistsRelations = relations(wishlists, ({ one }) => ({
  user: one(users, {
    fields: [wishlists.userId],
    references: [users.id],
  }),
  extension: one(extensions, {
    fields: [wishlists.extensionId],
    references: [extensions.id],
  }),
}));
export default wishlists;
