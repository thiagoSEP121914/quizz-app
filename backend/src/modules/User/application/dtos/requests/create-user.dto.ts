import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  MinLength,
} from "class-validator";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: "O nome é obrigatório" })
  name!: string;

  @IsEmail({}, { message: "Formato de e-mail inválido" })
  @IsNotEmpty({ message: "O e-mail é obrigatório" })
  email!: string;

  @IsString()
  @IsOptional()
  @MinLength(8, { message: "A senha deve ter pelo menos 8 caracteres" })
  password?: string;
}
