import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { HydratedDocument } from "mongoose";

import { AbstractDocument } from "src/common/repositories/schema/abstract.schema";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum QuestionType {
  MULTIPLE_CHOICE = "multiple_choice",
}

export class QuestionOption {
  @Prop({ required: true })
  id!: number;

  @Prop({ required: true })
  text!: string;
}

@Schema({ timestamps: true, collection: "questions" })
export class QuestionDocument extends AbstractDocument {
  @Prop({
    required: true,
    trim: true,
  })
  question!: string;

  @Prop({
    required: true,
    enum: QuestionType,
    default: QuestionType.MULTIPLE_CHOICE,
  })
  questionType!: QuestionType;

  @Prop({
    required: true,
    default: false,
  })
  multipleCorrect!: boolean;

  @Prop({
    type: [QuestionOption],
    required: true,
    validate: {
      validator: (options: QuestionOption[]) => options.length >= 2,
      message: "Question must have at least 2 options",
    },
  })
  options!: QuestionOption[];

  @Prop({
    type: [Number],
    required: true,
    validate: {
      validator: (answers: number[]) => answers.length >= 1,
      message: "Question must have at least 1 correct answer",
    },
  })
  correctAnswers!: number[];

  @Prop({
    trim: true,
  })
  explanation?: string;

  @Prop({
    required: true,
    trim: true,
  })
  category!: string;

  @Prop({
    type: [String],
    default: [],
  })
  services!: string[];

  @Prop({
    required: true,
    enum: Difficulty,
    default: Difficulty.EASY,
  })
  difficulty!: Difficulty;

  @Prop({
    required: true,
    trim: true,
  })
  exam!: string;

  @Prop({
    default: true,
  })
  isActive!: boolean;
}

export type QuestionSchemaDocument = HydratedDocument<QuestionDocument>;

export const QuestionSchema = SchemaFactory.createForClass(QuestionDocument);
