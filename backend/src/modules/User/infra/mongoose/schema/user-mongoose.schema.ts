import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/common/repositories/schema/abstract.schema";
import { HydratedDocument } from "mongoose";

@Schema({ timestamps: true, collection: "Users" })
export class UserDocument extends AbstractDocument {
  @Prop({ required: true, trim: true })
  name!: string;

  @Prop({ required: true, trim: true, unique: true })
  email!: string;

  @Prop({ required: false })
  password?: string;
}

export type UserSchemaDocument = HydratedDocument<UserDocument>;

export const UserSchema = SchemaFactory.createForClass(UserDocument);
UserSchema.index({ email: 1, active: 1 });
