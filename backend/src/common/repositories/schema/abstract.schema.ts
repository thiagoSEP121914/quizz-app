// src/common/database/abstract.schema.ts
import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema({ timestamps: true })
export abstract class AbstractDocument {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id!: Types.ObjectId;

  @Prop({ type: [String], default: [] })
  actions!: string[];

  @Prop({ default: true })
  active!: boolean;

  @Prop({ default: null })
  deletedAt?: Date;
}
