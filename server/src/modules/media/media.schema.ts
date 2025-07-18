import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const media = pgTable("media", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // image or video
  url: text("url").notNull(),
  thumbnail: text("thumbnail"),
  extensionId: integer("extension_id").references(() => extensions.id),
});
export const mediaRelations = relations(media, ({ one }) => ({
  extensions: one(extensions, {
    fields: [media.extensionId],
    references: [extensions.id],
  }), // a media should has only one extension but a extension should has too many media
}));
export default media;
