import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { IQuestionRepository } from "../../domain/question.repository";
import { Question } from "../../domain/question.model";

@Injectable()
export class GetQuestionUseCase {
  constructor(
    @Inject("IQuestionRepository")
    private readonly questionRepository: IQuestionRepository,
  ) {}

  async execute(id: string): Promise<Question> {
    const question = await this.questionRepository.findById(id);
    if (!question) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }

    return question;
  }
}
