import { prop, modelOptions } from "@typegoose/typegoose";
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'BusinessType' } })
export class BusinessTypesEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ required: true })
  businessType: string;
}
