import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Patch,
  Param,
  Body,
} from "@nestjs/common";
import { FindUserByIdUseCase } from "../application/use-cases/find-user-by-id.use-case";
import { CreateUserUseCase } from "../application/use-cases/create-user.use-case";
import { UpdateUserUseCase } from "../application/use-cases/update-user.use-case";
import { CreateUserDTO } from "../application/dtos/requests/create-user.dto";
import { UpdateUserDTO } from "../application/dtos/requests/update-user.dto";

@Controller({
  path: "users",
  version: "1",
})
export class UserController {
  constructor(
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase, // Corrigi o typo: updateUserUserCase -> updateUserUseCase
  ) {}

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  async findById(@Param("id") userId: string) {
    return this.findUserByIdUseCase.execute(userId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDTO: CreateUserDTO) {
    return this.createUserUseCase.execute(createUserDTO);
  }

  @Patch(":id")
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Param("id") userId: string,
    @Body() updateUserDTO: UpdateUserDTO, // Adicionado @Body()
  ) {
    return this.updateUserUseCase.execute(userId, updateUserDTO);
  }
}
