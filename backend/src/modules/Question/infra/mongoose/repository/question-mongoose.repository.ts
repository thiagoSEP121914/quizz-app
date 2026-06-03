import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  IQuestionRepository,
  FindRandomInput,
} from "src/modules/Question/domain/question.repository";
import {
  QuestionDocument,
  QuestionSchemaDocument,
} from "../schema/question-mongoose.schema";
import {
  SearchInput,
  SearchOutPut,
} from "src/common/domain/repository/IRepository";
import { Question } from "src/modules/Question/domain/question.model";
import { Model } from "mongoose";

@Injectable()
export class QuestionMongooseRepository implements IQuestionRepository {
  private sortableFields: string[] = [
    "createdAt",
    "question",
    "difficulty",
    "category",
  ];

  constructor(
    @InjectModel(QuestionDocument.name)
    private readonly QuestionModel: Model<QuestionDocument>,
  ) {}

  async findByCategory(category: string): Promise<Question[]> {
    const docs = await this.QuestionModel.find({
      category,
      isActive: true,
    }).exec();
    return docs.map((doc) => this.toDomain(doc));
  }

  async findRandom(params: FindRandomInput): Promise<SearchOutPut<Question>> {
    const filterQuery: any = { isActive: true };
    if (params.category) filterQuery.category = params.category;
    if (params.filter)
      filterQuery.question = { $regex: params.filter, $options: "i" };

    const perPage = params.per_page || 10;

    const total = await this.QuestionModel.countDocuments(filterQuery);

    const aggregationPipeline = [
      { $match: filterQuery },
      { $sample: { size: perPage } },
    ];

    const docs = await this.QuestionModel.aggregate(aggregationPipeline);
    const items = docs.map((doc) => this.toDomain(new this.QuestionModel(doc)));

    return this.buildPaginatedResponse(items, total, params);
  }

  async findAll(params: SearchInput): Promise<SearchOutPut<Question>> {
    const filterQuery: any = {};
    if (params.filter) {
      filterQuery.question = { $regex: params.filter, $options: "i" };
    }

    const page = params.page || 1;
    const perPage = params.per_page || 10;
    const skip = (page - 1) * perPage;
    const sortBy =
      params.sort_by && this.sortableFields.includes(params.sort_by)
        ? params.sort_by
        : "createdAt";
    const sortDir = params.sort_dir === "asc" ? 1 : -1;

    const [docs, total] = await Promise.all([
      this.QuestionModel.find(filterQuery)
        .sort({ [sortBy]: sortDir })
        .skip(skip)
        .limit(perPage)
        .exec(),
      this.QuestionModel.countDocuments(filterQuery),
    ]);

    return this.buildPaginatedResponse(
      docs.map((doc) => this.toDomain(doc)),
      total,
      params,
      sortBy,
      params.sort_dir || "desc",
    );
  }

  async findById(id: string): Promise<Question | null> {
    const doc = await this.QuestionModel.findById(id).exec();
    if (!doc) return null;
    return this.toDomain(doc);
  }

  create(data: Question): Question {
    return data;
  }

  async insert(model: Question): Promise<Question> {
    const created = new this.QuestionModel(model);
    const saved = await created.save();
    return this.toDomain(saved);
  }

  async update(id: string, model: Partial<Question>): Promise<Question | null> {
    const updated = await this.QuestionModel.findByIdAndUpdate(id, model, {
      new: true,
    }).exec();
    if (!updated) return null;
    return this.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.QuestionModel.findByIdAndDelete(id).exec();
  }

  private toDomain(doc: QuestionSchemaDocument): Question {
    const json = doc.toJSON() as any;
    return {
      id: json._id.toString(),
      question: json.question,
      questionType: json.questionType,
      multipleCorrect: json.multipleCorrect,
      options: json.options,
      correctAnswers: json.correctAnswers,
      explanation: json.explanation,
      category: json.category,
      services: json.services,
      difficulty: json.difficulty,
      exam: json.exam,
      isActive: json.isActive ?? json.active,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
    };
  }

  private buildPaginatedResponse(
    items: Question[],
    total: number,
    params: SearchInput,
    sort: string | null = null,
    sortDir: string | null = null,
  ): SearchOutPut<Question> {
    return {
      items,
      per_page: params.per_page || 10,
      total,
      current_page: params.page || 1,
      sort,
      sort_dir: sortDir,
      filter: params.filter || null,
    };
  }
}
