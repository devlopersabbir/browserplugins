import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import users from "../users/users.schema";

const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  bio: text("bio"),
  avatar: text("avatar"),
  verified: boolean("verified").default(false),
  developerId: integer("userId").references(() => users.id),
});

export default profile;
