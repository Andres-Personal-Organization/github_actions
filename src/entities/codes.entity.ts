import { modelOptions, prop } from "@typegoose/typegoose";
import { IsNumber, IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'Codes' } })
export class CodesEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop()
  code: string;

  @IsString()
  @prop()
  countryId: string;

  @IsNumber()
  @prop()
  type: number;

  @IsString()
  @prop()
  destination: string;
}

