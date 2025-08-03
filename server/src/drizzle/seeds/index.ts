import "dotenv/config";
import * as schema from "../schema";
import { faker } from "@faker-js/faker";
import { db } from "../index";

async function main() {
  await Promise.all([
    // categoris seed
    await db.insert(schema.categories).values(
      Array.from({ length: 4 }).map(() => ({
        name: faker.hacker.noun(),
        slug: faker.hacker.noun(),
        description: faker.lorem.lines(1),
      })),
    ),
  ]);
  console.log("✅ Seed complete");
}

main().catch((err) => {
  console.error("🛑 Seed failed", err);
  process.exit(1);
});
