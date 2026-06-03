import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { IQuestionRepository } from "../../domain/question.repository";

@Injectable()
export class DeleteQuestionUseCase {
  constructor(
    @Inject("IQuestionRepository")
    private readonly questionRepository: IQuestionRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const question = await this.questionRepository.findById(id);
    if (!question) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }

    await this.questionRepository.delete(id);
  }
}
