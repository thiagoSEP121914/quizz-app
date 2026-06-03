import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionController } from "./presentation/controllers/question.controller";
import { CreateQuestionUseCase } from "./application/use-cases/create-question.use-case";
import { UpdateQuestionUseCase } from "./application/use-cases/update-question.use-case";
import { DeleteQuestionUseCase } from "./application/use-cases/delete-question.use-case";
import { GetQuestionUseCase } from "./application/use-cases/get-question.use-case";
import { FindAllQuestionsUseCase } from "./application/use-cases/find-all-questions.use-case";
import { FindRandomQuestionsUseCase } from "./application/use-cases/find-random-questions.use-case";
import { FindByCategoryUseCase } from "./application/use-cases/find-by-category.use-case";
import { QuestionMongooseRepository } from "./infra/mongoose/repository/question-mongoose.repository";
import {
  QuestionDocument,
  QuestionSchema,
} from "./infra/mongoose/schema/question-mongoose.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionDocument.name, schema: QuestionSchema },
    ]),
  ],
  controllers: [QuestionController],
  providers: [
    CreateQuestionUseCase,
    UpdateQuestionUseCase,
    DeleteQuestionUseCase,
    GetQuestionUseCase,
    FindAllQuestionsUseCase,
    FindRandomQuestionsUseCase,
    FindByCategoryUseCase,
    {
      provide: "IQuestionRepository",
      useClass: QuestionMongooseRepository,
    },
  ],
})
export class QuestionModule {}
