import {
  BadRequestException,
  ConflictException,
  Injectable,
} from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { hashPassword } from "@/lib/utils";
import { UserSchema } from "./data-transfer-object/user.dto";

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async register(input: UserSchema) {
    // check if user already exist or not
    const user = await this.repository.findOne({
      email: input.email,
      username: input.username,
    });
    if (user) throw new ConflictException("User already exist");
    // create user
    const hash = await hashPassword(input.password);
    if (!hash) throw new BadRequestException("Fail to has password");
    return await this.repository.create({
      ...input,
      password: hash,
    });
  }
  async index() {
    return this.repository.index();
  }
}
