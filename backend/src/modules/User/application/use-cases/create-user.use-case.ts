import { BadRequestException, Injectable, Inject } from "@nestjs/common";
import { type IUserRepository } from "../../domain/user.repository";
import { CreateUserDTO } from "../dtos/requests/create-user.dto";
import { UserResponseDTO } from "../dtos/responses/user-response.dto";
import {
  type IHashService,
  HASH_SERVICE_TOKEN,
} from "src/common/domain/interfaces/hash.interface";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject("IUserRepository")
    private readonly userRepository: IUserRepository,

    @Inject(HASH_SERVICE_TOKEN)
    private readonly hashService: IHashService,
  ) {}

  async execute(data: CreateUserDTO): Promise<UserResponseDTO> {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new BadRequestException("Este e-mail já está em uso.");
    }

    const hashedPassword = await this.hashService.hash(data.password!);

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
