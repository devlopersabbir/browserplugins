import { index, integer, pgTable, text } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import users from "../users/users.schema";
import { baseSchema } from "@/utils/db-utility";
import { relations } from "drizzle-orm";

const downloads = pgTable(
  "downloads",
  {
    ...baseSchema,

    userId: integer("user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    extensionId: integer("extension_id")
      .notNull()
      .references(() => extensions.id, { onDelete: "cascade" }),
    ipAddress: text("ip_address"),
  },
  (table) => ({
    extensionIdIdx: index("downloads_extension_id_idx").on(table.extensionId),
    userIdIdx: index("downloads_user_id_idx").on(table.userId),
    createdAtIdx: index("downloads_created_at_idx").on(table.createdAt),
  }),
);
export const downloadsRelations = relations(downloads, ({ one }) => ({
  user: one(users, {
    fields: [downloads.userId],
    references: [users.id],
  }),
  extension: one(extensions, {
    fields: [downloads.extensionId],
    references: [extensions.id],
  }),
}));
export default downloads;
