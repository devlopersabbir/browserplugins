import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const permissions = pgTable("permissions", {
  id: serial("id").primaryKey(),
  extensionId: integer("extension_id").references(() => extensions.id),
  permission: text("permission").notNull(),
});

export const permissionsRelations = relations(permissions, ({ one }) => ({
  extension: one(extensions, {
    fields: [permissions.extensionId],
    references: [extensions.id],
  }),
}));

export default permissions;
