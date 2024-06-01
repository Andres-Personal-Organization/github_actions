import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';
@modelOptions({ schemaOptions: { collection: 'CountryState' } })
export class CountriesEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ trim: true })
  coutryId: string;

  @IsString()
  @prop({ trim: true })
  stateName: string;
}
