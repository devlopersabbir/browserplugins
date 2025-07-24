import { Module } from "@nestjs/common";
import { DirzzleModule } from "./drizzle/drizzle.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DirzzleModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
