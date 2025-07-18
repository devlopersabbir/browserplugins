import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const tags = pgTable("tags", {
  id: serial("id").primaryKey(),

  extensionId: integer("extension_id").references(() => extensions.id),
  tag: text("tag").notNull(),
});

export const tagsRelations = relations(tags, ({ one }) => ({
  extension: one(extensions, {
    fields: [tags.extensionId],
    references: [extensions.id],
  }),
}));

export default tags;
