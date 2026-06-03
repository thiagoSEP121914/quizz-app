import {
  IRepository,
  SearchInput,
  SearchOutPut,
} from "src/common/domain/repository/IRepository";
import { Question } from "../domain/question.model";

export type createQuestionProps = Omit<
  Question,
  "id" | "createdAt" | "updatedAt"
>;

export type FindRandomInput = SearchInput & {
  seed: number;
  category?: string;
};

export interface IQuestionRepository extends IRepository<Question, Question> {
  findByCategory(category: string): Promise<Question[]>;
  findRandom(params: FindRandomInput): Promise<SearchOutPut<Question>>;
}
