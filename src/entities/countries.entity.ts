import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';
@modelOptions({ schemaOptions: { collection: 'country' } })
export class CountriesEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ required: true })
  countryName: string;

  @IsString()
  @prop({ required: true })
  countryPhonePrefix: string;
}
