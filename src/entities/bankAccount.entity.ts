import { modelOptions, prop } from "@typegoose/typegoose";
import { IsNumber, IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'BankAccount', timestamps: true } })
export class BankAccountEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop()
  participantId?: string;

  @IsString()
  @prop()
  bankName?: string;

  @IsString()
  @prop()
  bankNickname?: string;

  @IsNumber()
  @prop()
  bankCountryId?: number;

  @IsString()
  @prop()
  bankAddress?: string;

  @IsString()
  @prop()
  bankCity?: string;

  @IsString()
  @prop()
  bankStateId?: string;

  @IsString()
  @prop()
  bankZipPostalCode?: string;

  @IsString()
  @prop()
  accountName?: string;

  @IsNumber()
  @prop()
  beneficiaryCountryId?: number;

  @IsString()
  @prop()
  accountAddress?: string;

  @IsString()
  @prop()
  beneficiaryCity?: string;

  @IsString()
  @prop()
  beneficiaryStateId?: string;

  @IsString()
  @prop()
  beneficiaryZipPostalCode?: string;

  @IsString()
  @prop()
  accountNumber?: string;

  @IsNumber()
  @prop()
  currencyId?: number;

  @IsString()
  @prop()
  swift?: string;

  @IsString()
  @prop()
  achAccountType?: string;
}
