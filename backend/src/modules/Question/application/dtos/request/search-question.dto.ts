import { IsOptional, IsNumber, IsString, IsIn } from "class-validator";
import { Type } from "class-transformer";
import { SearchInput } from "src/common/domain/repository/IRepository";
import { FindRandomInput } from "src/modules/Question/domain/question.repository";

export class SearchQuestionDto implements SearchInput {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  per_page?: number;

  @IsOptional()
  @IsString()
  sort_by?: string;

  @IsOptional()
  @IsIn(["asc", "desc"])
  sort_dir?: "asc" | "desc";

  @IsOptional()
  @IsString()
  filter?: string;
}

export class FindRandomQuestionDto
  extends SearchQuestionDto
  implements FindRandomInput
{
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  seed!: number;

  @IsOptional()
  @IsString()
  category?: string;
}
