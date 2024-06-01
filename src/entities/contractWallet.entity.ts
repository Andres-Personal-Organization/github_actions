import { modelOptions, prop } from "@typegoose/typegoose";
import { IsDate, IsNumber, IsString } from 'class-validator';
@modelOptions({ schemaOptions: { collection: 'ContractWallet' } })
export class ContractWalletEntity {
  @IsString()
  @prop()
  _id: string;

  @IsNumber()
  @prop()
  amount: number;

  @IsNumber()
  @prop()
  balance: number;

  @IsNumber()
  @prop()
  currencyId: number;

  @IsNumber()
  @prop()
  contractId: number;

  @IsString()
  @prop()
  notes: string;


  @IsString()
  @prop()
  paymentRef: string;

  @IsNumber()
  @prop()
  status: number;

  @IsDate()
  @prop()
  createdAt: Date;
}
