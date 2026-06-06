import { User } from "../../../domain/user.model";

export class UserResponseDTO {
  id!: string;
  name!: string;
  email!: string;
  isActive!: boolean;
  createdAt!: Date;

  static fromDomain(user: User): UserResponseDTO {
    const dto = new UserResponseDTO();
    dto.id = user.id!;
    dto.name = user.name!;
    dto.email = user.email;
    dto.isActive = user.isActive;
    dto.createdAt = user.createdAt!;
    return dto;
  }
}
