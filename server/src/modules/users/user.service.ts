import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}
  async index() {
    return this.userRepo.index();
  }
  async store() {
    return this.store();
  }
}
