import { relations } from "drizzle-orm";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  extensions: many(extensions), // a user/developer has many extensions
}));
export default users;
