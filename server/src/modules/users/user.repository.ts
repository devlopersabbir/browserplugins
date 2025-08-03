import { BaseRepository } from "@/services/base-repository";
import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { AllowAccessFrom } from "@/decorator/allow-access.decorator";
import { db } from "@/drizzle";
import { and, eq } from "drizzle-orm";
import users from "./users.schema";
import { UserSchema } from "./data-transfer-object/user.dto";

@AllowAccessFrom([UserService])
@Injectable()
export class UserRepository extends BaseRepository {
  async create(input: UserSchema) {
    const [user] = await db.insert(users).values(input).returning();
    return user;
  }
  async findOne(query: { username?: string; email?: string }) {
    if (query.username && query.email) {
      return await db.query.users.findFirst({
        where: and(
          eq(users.email, query.email),
          eq(users.username, query.username),
        ),
      });
    } else if (query.email) {
      return await db.query.users.findFirst({
        where: eq(users.email, query.email),
      });
    } else if (query.username) {
      return await db.query.users.findFirst({
        where: eq(users.username, query.username),
      });
    } else {
      return await db.query.users.findFirst();
    }
  }
  async index() {
    return "index";
  }
  async update() {}
  async delete() {}
}
