import { prop, modelOptions, getModelForClass, DocumentType, getModelWithString } from "@typegoose/typegoose";
import {IsArray, IsBoolean, IsNumber, IsObject, IsString} from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'cdr_reports', timestamps: true } })
export class CdrReportEntity {
  @IsString()
  @prop()
  fileName?: string;

  @IsNumber()
  @prop()
  totalAttempts?: number;

  @IsNumber()
  @prop()
  connectedCalls?: number;

  @IsNumber()
  @prop()
  asr?: number;

  @IsNumber()
  @prop()
  totalDuration?: number;

  @IsNumber()
  @prop()
  acd?: number;

  @IsArray()
  @prop()
  destinations?: any;

  @IsArray()
  @prop()
  repeatedOrigNumbers?: any;

  @IsArray()
  @prop()
  destNumberCount?: any;
}
