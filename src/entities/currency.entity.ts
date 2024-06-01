import { prop, modelOptions } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'Currency' } })
export class CurrencyEntity {
  @IsString()
  @prop({ required: true })
  _id: string;

  @IsString()
  @prop({ required: true })
  currencyName: string;

  @IsString()
  @prop()
  currencySymbol: string;

  @IsString()
  @prop()
  symbolPosition: string;

  @IsString()
  @prop()
  tesspayFeesParticipant: string;

  @IsString()
  @prop()
  financeFeesParticipant: string;

  @IsString()
  @prop()
  financeParticipant: string;
}
