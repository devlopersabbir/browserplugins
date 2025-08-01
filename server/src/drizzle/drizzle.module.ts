import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { DB } from "@/@types";

export const DRIZZLE_CONNECTION = Symbol("DRIZZLE_CONNECTION");
@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DRIZZLE_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databaseUrl = configService.get<string>("DATABASE_URL");

        const pool = new Pool({
          connectionString: databaseUrl,
          ssl: true,
        });
        drizzle(pool, { schema }) as DB;
      },
    },
  ],
  exports: [DRIZZLE_CONNECTION],
})
export class DirzzleModule {}
