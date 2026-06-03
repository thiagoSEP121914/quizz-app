import { Injectable, Inject } from "@nestjs/common";
import type { IQuestionRepository } from "../../domain/question.repository";
import { Question } from "../../domain/question.model";
import { FindRandomQuestionDto } from "../dtos/request/search-question.dto";
import { SearchOutPut } from "src/common/domain/repository/IRepository";

@Injectable()
export class FindRandomQuestionsUseCase {
  constructor(
    @Inject("IQuestionRepository")
    private readonly questionRepository: IQuestionRepository,
  ) {}

  async execute(params: FindRandomQuestionDto): Promise<SearchOutPut<Question>> {
    return this.questionRepository.findRandom(params);
  }
}
