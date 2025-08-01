import { Module } from "@nestjs/common";
import { DirzzleModule } from "./drizzle/drizzle.module";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./modules/users/users.module";
import { ExtensionModule } from "./modules/extensions/extensions.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DirzzleModule,
    UserModule,
    ExtensionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
