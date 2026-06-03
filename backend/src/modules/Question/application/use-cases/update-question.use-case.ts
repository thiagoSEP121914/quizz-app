import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { IQuestionRepository } from "../../domain/question.repository";
import { Question } from "../../domain/question.model";
import { UpdateQuestionDto } from "../dtos/request/update-question.dto";

@Injectable()
export class UpdateQuestionUseCase {
  constructor(
    @Inject("IQuestionRepository")
    private readonly questionRepository: IQuestionRepository,
  ) {}

  async execute(id: string, dto: UpdateQuestionDto): Promise<Question> {
    const updated = await this.questionRepository.update(id, dto);
    
    if (!updated) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }

    return updated;
  }
}
