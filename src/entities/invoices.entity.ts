import { modelOptions, prop } from "@typegoose/typegoose";
import { IsDate, IsNumber, IsObject, IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'invoices' } })
export class InvoicesEntity {
  @IsString()
  @prop()
  _id: string;

  @IsObject()
  @prop()
  data?: {
    CUSTKEY: string,
    NAME: string,
    CATEGORY: string,
    GROUP: string,
    DATE_START: string,
    DATE_END: string,
    INT_CALLS: string,
    INT_MIN: string,
    INT_AMOUNT: string,
    ONE_CALLS: string,
    ONE_MIN: string,
    ONE_AMOUNT: string,
    TOT_CALLS: string,
    TOT_MIN: string,
    TOT_AMOUNT: string,
    TOT_PERCT: number,
    OTHER: string,
    TOTCURRENT: string,
    PREVBAL: string,
    PAYADJ: string,
    TOTBALFWD: string,
    FINANCE: string,
    AMOUNTDUE: string,
    INV_NUMBER: string,
    TOP_UP: string
  }

  @IsString()
  @prop()
  customerId: string;

  @IsDate()
  @prop()
  date: Date;

  @IsNumber()
  @prop()
  lastTouchedMs: number;

  @IsString()
  @prop()
  smartContractId: string;

  @IsDate()
  @prop()
  createdAt: Date;

  @IsDate()
  @prop()
  updatedAt: Date;

}
