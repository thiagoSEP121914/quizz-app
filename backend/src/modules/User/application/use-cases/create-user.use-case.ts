import { BadRequestException, Injectable, Inject } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { type IUserRepository } from "../../domain/user.repository";
import { CreateUserDTO } from "../dtos/requests/create-user.dto";
import { UserResponseDTO } from "../dtos/responses/user-response.dto";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject("IQuestionRepository")
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(data: CreateUserDTO): Promise<UserResponseDTO> {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new BadRequestException("Este e-mail já está em uso.");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const userEntity = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      isActive: true,
    };

    const savedUser = await this.userRepository.insert(userEntity);

    return UserResponseDTO.fromDomain(savedUser);
  }
}
