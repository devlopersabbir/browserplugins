import { BaseRepository } from "@/services/base-repository";
import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { AllowAccessFrom } from "@/decorator/allow-access.decorator";

@AllowAccessFrom([UserService])
@Injectable()
export class UserRepository extends BaseRepository {
  async index() {
    return "index";
  }
  async store() {
    return "store";
  }
  async update() {}
  async delete() {}
}
