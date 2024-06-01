import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'OfferType' } })
export class OfferTypeEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ required: true })
  offerTypeName: string;
}
