import { Injectable, Inject } from "@nestjs/common";
import type { IQuestionRepository } from "../../domain/question.repository";
import { Question } from "../../domain/question.model";
import { CreateQuestionDto } from "../dtos/request/create-question.dto";

@Injectable()
export class CreateQuestionUseCase {
  constructor(
    @Inject("IQuestionRepository")
    private readonly questionRepository: IQuestionRepository,
  ) {}

  async execute(dto: CreateQuestionDto): Promise<Question> {
    const question = this.questionRepository.create({
      ...dto,
      isActive: dto.isActive ?? true,
    } as Question);

    return this.questionRepository.insert(question);
  }
}
