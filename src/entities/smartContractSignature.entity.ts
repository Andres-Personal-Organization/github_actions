import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';
@modelOptions({ schemaOptions: { collection: 'SmartContractSignature', timestamps: true } })
export class CountriesEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop()
  userId: string;

  @IsString()
  @prop()
  smartContractId: string;

  @IsString()
  @prop()
  status: string;
}
