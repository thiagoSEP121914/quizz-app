import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { UserResponseDTO } from "../dtos/responses/user-response.dto";
import { type IUserRepository } from "../../domain/user.repository";

@Injectable()
export class FindUserByIdUseCase {
  constructor(
    @Inject("IUserRepository")
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<UserResponseDTO> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return UserResponseDTO.fromDomain(user);
  }
}
