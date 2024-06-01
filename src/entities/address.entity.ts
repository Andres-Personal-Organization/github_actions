import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'Address', timestamps: true } })
export class AddressEntity {
  @IsString()
  @prop()
  _id?: string;

  @IsString()
  @prop()
  participantId?: string;

  @IsString()
  @prop()
  addressLine1?: string;


  @IsString()
  @prop()
  addressLine2?: string;


  @IsString()
  @prop()
  city?: string;


  @IsString()
  @prop()
  stateId?: string;

  @IsString()
  @prop()
  countryId?: string;

  @IsString()
  @prop()
  zipPostalCode?: string;
}
