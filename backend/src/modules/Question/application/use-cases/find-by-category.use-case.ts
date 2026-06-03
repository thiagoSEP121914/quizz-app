import { Injectable, Inject } from "@nestjs/common";
import type { IQuestionRepository } from "../../domain/question.repository";
import { Question } from "../../domain/question.model";

@Injectable()
export class FindByCategoryUseCase {
  constructor(
    @Inject("IQuestionRepository")
    private readonly questionRepository: IQuestionRepository,
  ) {}

  async execute(category: string): Promise<Question[]> {
    return this.questionRepository.findByCategory(category);
  }
}
