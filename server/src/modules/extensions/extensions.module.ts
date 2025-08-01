import { Module } from "@nestjs/common";
import { ExtensionController } from "./extenions.controller";
import { ExtensionRepository } from "./extension.repository";
import { ExtensionService } from "./extension.service";

@Module({
  controllers: [ExtensionController],
  providers: [ExtensionRepository, ExtensionService],
  exports: [ExtensionRepository],
})
export class ExtensionModule {}
