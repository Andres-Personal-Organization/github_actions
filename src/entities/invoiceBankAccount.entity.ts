import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'invoicebankaccounts' } })
export class InvoiceBankAccountEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ required: true })
  smartContractId: string;

  @IsString()
  @prop()
  bankAccountId: string;
}
