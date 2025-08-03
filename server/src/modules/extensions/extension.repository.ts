import { DRIZZLE_CONNECTION } from "@/drizzle/drizzle.module";
import { Inject, Injectable } from "@nestjs/common";
import { SQL } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "@/drizzle/schema";

@Injectable()
export class ExtensionRepository {
  constructor(
    @Inject(DRIZZLE_CONNECTION)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}
  async fetch() {
    const filter: SQL[] = [];

    return await this.db.query.extensions.findMany();
  }
}
