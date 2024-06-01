import { prop, modelOptions, getModelForClass, DocumentType, getModelWithString } from "@typegoose/typegoose";
import { IsBoolean, IsNumber, IsObject, IsString} from 'class-validator';
import * as mongoose from 'mongoose';

@modelOptions({ schemaOptions: { collection: 'cdr_reports_data', timestamps: true } })
export class CdrReportDataEntity {

  @prop()
  reportId?: mongoose.Types.ObjectId;

  @IsObject()
  @prop()
  data?: any;
}
