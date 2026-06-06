import { IRepository } from "src/common/domain/repository/IRepository";
import { User } from "./user.model";

export interface IUserRepository extends IRepository<User, User> {
  findByEmail(email: string): Promise<User | null>;
}
