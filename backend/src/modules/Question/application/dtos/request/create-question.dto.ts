import {
  IsString,
  IsBoolean,
  IsArray,
  IsOptional,
  ValidateNested,
  IsNumber,
  ArrayMinSize,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";

export class QuestionOptionDto {
  @IsNumber()
  id!: number;

  @IsString()
  @IsNotEmpty()
  text!: string;
}

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  question!: string;

  @IsString()
  @IsNotEmpty()
  questionType!: string;

  @IsBoolean()
  multipleCorrect!: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionOptionDto)
  @ArrayMinSize(2)
  options!: QuestionOptionDto[];

  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  correctAnswers!: number[];

  @IsString()
  @IsOptional()
  explanation?: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsArray()
  @IsString({ each: true })
  services!: string[];

  @IsString()
  @IsNotEmpty()
  difficulty!: string;

  @IsString()
  @IsNotEmpty()
  exam!: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
