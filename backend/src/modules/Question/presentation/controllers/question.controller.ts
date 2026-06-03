import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { CreateQuestionDto } from "../../application/dtos/request/create-question.dto";
import { UpdateQuestionDto } from "../../application/dtos/request/update-question.dto";
import {
  SearchQuestionDto,
  FindRandomQuestionDto,
} from "../../application/dtos/request/search-question.dto";
import { CreateQuestionUseCase } from "../../application/use-cases/create-question.use-case";
import { UpdateQuestionUseCase } from "../../application/use-cases/update-question.use-case";
import { DeleteQuestionUseCase } from "../../application/use-cases/delete-question.use-case";
import { GetQuestionUseCase } from "../../application/use-cases/get-question.use-case";
import { FindAllQuestionsUseCase } from "../../application/use-cases/find-all-questions.use-case";
import { FindRandomQuestionsUseCase } from "../../application/use-cases/find-random-questions.use-case";
import { FindByCategoryUseCase } from "../../application/use-cases/find-by-category.use-case";

@Controller({
  path: "question",
  version: "1",
})
export class QuestionController {
  constructor(
    private readonly createQuestionUseCase: CreateQuestionUseCase,
    private readonly updateQuestionUseCase: UpdateQuestionUseCase,
    private readonly deleteQuestionUseCase: DeleteQuestionUseCase,
    private readonly getQuestionUseCase: GetQuestionUseCase,
    private readonly findAllQuestionsUseCase: FindAllQuestionsUseCase,
    private readonly findRandomQuestionsUseCase: FindRandomQuestionsUseCase,
    private readonly findByCategoryUseCase: FindByCategoryUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.createQuestionUseCase.execute(createQuestionDto);
  }

  @Get()
  async findAll(@Query() params: SearchQuestionDto) {
    return this.findAllQuestionsUseCase.execute(params);
  }

  @Get("random")
  async findRandom(@Query() params: FindRandomQuestionDto) {
    return this.findRandomQuestionsUseCase.execute(params);
  }

  @Get("category/:category")
  async findByCategory(@Param("category") category: string) {
    return this.findByCategoryUseCase.execute(category);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.getQuestionUseCase.execute(id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.updateQuestionUseCase.execute(id, updateQuestionDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param("id") id: string) {
    return this.deleteQuestionUseCase.execute(id);
  }
}
