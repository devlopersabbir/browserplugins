import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const changelogs = pgTable("changelogs", {
  id: serial("id").primaryKey(),
  extensionId: integer("extension_id").references(() => extensions.id),
  version: text("version").notNull(),
  date: text("date").notNull(),
  changes: text("changes").array(), // or use a related table if preferred
});
export const changelogsRelations = relations(changelogs, ({ one }) => ({
  extension: one(extensions, {
    fields: [changelogs.extensionId],
    references: [extensions.id],
  }),
}));
export default changelogs;
