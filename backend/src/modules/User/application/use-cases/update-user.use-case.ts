import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { type IUserRepository } from "../../domain/user.repository";
import { UserResponseDTO } from "../dtos/responses/user-response.dto";
import { UpdateUserDTO } from "../dtos/requests/update-user.dto";

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject("IUserRepository")
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(
    userId: string,
    updateUserDTO: UpdateUserDTO,
  ): Promise<UserResponseDTO> {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado.`);
    }

    const updatedUser = await this.userRepository.update(userId, updateUserDTO);

    if (!updatedUser) {
      throw new NotFoundException("Failed to update user.");
    }

    return UserResponseDTO.fromDomain(updatedUser);
  }
}
