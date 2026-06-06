import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  SearchInput,
  SearchOutPut,
} from "src/common/domain/repository/IRepository";
import { User } from "src/modules/User/domain/user.model";
import { IUserRepository } from "src/modules/User/domain/user.repository";
import {
  UserDocument,
  UserSchemaDocument,
} from "../schema/user-mongoose.schema";
import { Model } from "mongoose";

@Injectable()
export class UserMongooseRepository implements IUserRepository {
  private sortableFields: string[] = ["name", "email", "createdAt", "active"];

  constructor(
    @InjectModel(UserDocument.name)
    private readonly UserModel: Model<UserDocument>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    const doc = await this.UserModel.findOne({ email }).exec();
    if (!doc) return null;
    return this.toDomain(doc);
  }

  async findAll(params: SearchInput): Promise<SearchOutPut<User>> {
    const filterQuery: any = {};
    if (params.filter) {
      filterQuery.name = { $regex: params.filter, $options: "i" };
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
      this.UserModel.find(filterQuery)
        .sort({ [sortBy]: sortDir })
        .skip(skip)
        .limit(perPage)
        .exec(),
      this.UserModel.countDocuments(filterQuery),
    ]);

    return this.buildPaginatedResponse(
      docs.map((doc) => this.toDomain(doc)),
      total,
      params,
      sortBy,
      params.sort_dir || "desc",
    );
  }

  async findById(id: string): Promise<User | null> {
    const doc = await this.UserModel.findById(id).exec();
    if (!doc) return null;
    return this.toDomain(doc);
  }

  create(data: User): User {
    return data;
  }

  async insert(model: User): Promise<User> {
    // Aqui garantimos que o ID do domínio seja enviado se existir
    const userData = { ...model, _id: model.id };
    const created = new this.UserModel(userData);
    const saved = await created.save();
    return this.toDomain(saved);
  }

  async update(id: string, model: Partial<User>): Promise<User | null> {
    const updated = await this.UserModel.findByIdAndUpdate(id, model, {
      new: true,
    }).exec();
    if (!updated) return null;
    return this.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.UserModel.findByIdAndUpdate(id, {
      $set: {
        deletedAt: new Date(),
        active: false,
      },
    }).exec();
  }

  private toDomain(doc: UserSchemaDocument): User {
    const json = doc.toJSON() as any;
    return {
      id: json._id.toString(),
      name: json.name,
      email: json.email,
      password: json.password,
      isActive: json.active,
      createdAt: json.createdAt,
      updatedAt: json.updatedAt,
    };
  }

  private buildPaginatedResponse(
    items: User[],
    total: number,
    params: SearchInput,
    sort: string | null = null,
    sortDir: string | null = null,
  ): SearchOutPut<User> {
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
