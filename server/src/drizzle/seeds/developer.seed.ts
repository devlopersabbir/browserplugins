import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "@/drizzle/schema";
import { faker } from "@faker-js/faker";
import { hashPassword } from "@/lib/utils";

export const developerWithProfile = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const userIds = await Promise.all(
    Array.from({ length: 5 }).map(async () => {
      const user = await db
        .insert(schema.users)
        .values({
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: await hashPassword(faker.internet.password({ length: 8 })),
        })
        .returning({ id: schema.users.id });

      await db.insert(schema.profiles).values({
        bio: faker.person.bio(),
        avatar: faker.image.avatar(),
        verified: faker.datatype.boolean(),
        developerId: user[0].id,
      });

      return user[0].id;
    }),
  );
  return userIds;
};
