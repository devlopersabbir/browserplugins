import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "@/drizzle/schema";
import { faker } from "@faker-js/faker";

export const extensions = async (
  db: NodePgDatabase<typeof schema>,
  userIds: number[],
) => {
  const extensionIds = await Promise.all(
    Array.from({ length: 5 }).map(async () => {
      const extension = await db
        .insert(schema.extensions)
        .values({
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          longDescription: faker.lorem.paragraphs(2),
          price: parseFloat(faker.commerce.price({ min: 10, max: 50 })),
          originalPrice: parseFloat(faker.commerce.price({ min: 51, max: 80 })),
          category: faker.internet.username(),
          //   browsers: ["chrome", "firefox"],
          rating: faker.number.float({ min: 3.5, max: 5 }),
          totalRatings: faker.number.int({ min: 0, max: 1000 }),
          users: `${faker.number.int({ min: 1, max: 20 })}K+`,
          version: "1.0.0",
          size: "2.0 MB",
          lastUpdated: faker.date.recent().toDateString(),
          isPopular: faker.datatype.boolean(),
          isFeatured: faker.datatype.boolean(),
          isNew: faker.datatype.boolean(),
          gradientFrom: "#10B981",
          gradientTo: "#06B6D4",
          developerId: faker.helpers.arrayElement(userIds),
        })
        .returning({ id: schema.extensions.id });
      return extension[0].id;
    }),
  );
  return extensionIds;
};
