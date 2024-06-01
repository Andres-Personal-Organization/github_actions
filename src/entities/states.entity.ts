import { prop, modelOptions } from "@typegoose/typegoose";
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'CountryState' } })
export class StatesEntity {
  @IsString()
  @prop({ required: true })
  _id: string;

  @IsString()
  @prop({ required: true })
  countryId: string;

  @IsString()
  @prop()
  stateName: string;
}
