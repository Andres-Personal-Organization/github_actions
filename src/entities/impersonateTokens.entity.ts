import { prop, modelOptions } from "@typegoose/typegoose";
import {IsArray, IsBoolean, IsDate, IsNumber, IsObject, IsString} from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'impersonate_tokens' } })
export class ImpersonateTokensEntity {
  @IsString()
  @prop({ required: true })
  _id: string;

  @IsString()
  @prop()
  impersonatedUserId: string;

  @IsString()
  @prop()
  impersonatorUserId: string;

  @IsString()
  @prop()
  secret: string;

  @IsDate()
  @prop()
  created_at: Date;

  @IsDate()
  @prop()
  invalidated_at?: Date;

  @IsBoolean()
  @prop({ name: 'active' })
  active: boolean;
}
