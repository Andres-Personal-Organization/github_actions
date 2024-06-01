import { modelOptions, prop } from "@typegoose/typegoose";
import { IsArray, IsNumber, IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'invoiceusages' } })
export class InvoiceUsagesEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ trim: true })
  date: string;

  @IsString()
  @prop({ trim: true, required: true })
  smartContractId: string;

  @IsString()
  @prop({ trim: true, required: true })
  customerId: string;

  @IsString()
  @prop({ trim: true, required: true })
  invoiceId: string;

  @IsNumber()
  @prop()
  lastTouchedMs: number;

  @IsArray()
  @prop()
  data?: [
    {
      CUSTKEY: string,
      NAME: string,
      DESC: string,
      EFF_DATE: string,
      RETE_PER: string,
      CALLS: string,
      MINUTES: string,
      AMOUNT: string,
      RPM: string,
      DATE_DUE: string,
      DATE_START: string,
      DATE_END: string
    }
  ]
}
