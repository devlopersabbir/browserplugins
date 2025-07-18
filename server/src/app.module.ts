import { Module } from "@nestjs/common";
import { DirzzleModule } from "./drizzle/drizzle.module";

@Module({
  imports: [DirzzleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
