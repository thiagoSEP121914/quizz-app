import { Injectable } from "@nestjs/common";
import { IHashService } from "src/common/domain/interfaces/hash.interface";
import * as bcrypt from "bcrypt";
import { env } from "../env/env";

@Injectable()
export class BcryptHashService implements IHashService {
  private readonly SALT_ROUNDS = env.SALT_ROUND;

  hash(data: string): Promise<string> {
    return bcrypt.hash(data, this.SALT_ROUNDS);
  }
  compare(data: string, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }
}
