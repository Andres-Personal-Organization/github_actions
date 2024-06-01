import { modelOptions, prop } from "@typegoose/typegoose";
import { IsBoolean, IsDate, IsNumber, IsObject, IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'SmartContract' } })
export class ContractsEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop()
  userId: string;

  @IsString()
  @prop()
  supplierId: string;

  @IsString()
  @prop()
  lenderId: string;

  @IsNumber()
  @prop()
  lenderFinanceFeePercent: number | undefined

  @IsNumber()
  @prop()
  lenderCoveragePercent: number | undefined

  @IsString()
  @prop()
  customerId: string;

  @IsString()
  @prop()
  supplierCarrierId: string;

  @IsString()
  @prop()
  customerCarrierId: string;

  @IsString()
  @prop()
  contractType: string;

  @IsNumber()
  @prop()
  minimumNoticeDays: number;

  @IsString()
  @prop()
  trafficType: string;

  @IsBoolean()
  @prop()
  isOriginContract: boolean;

  @IsString()
  @prop()
  settlementPeriodId: string;

  @IsString()
  @prop()
  invoicePeriodId: string;

  @IsNumber()
  @prop()
  paymentTerms: number;

  @IsNumber()
  @prop()
  paymentTermsNet: number;

  @IsString()
  @prop()
  status: string;

  @IsString()
  @prop()
  customerHardwareProfileId: string;

  @IsString()
  @prop()
  ingressCps?: string;

  @IsString()
  @prop()
  ingressMaxSessions?: string;

  @IsDate()
  @prop()
  endDate: Date;

  @IsDate()
  @prop()
  createdAt: Date;

  @IsDate()
  @prop()
  statusAt: Date;

  @IsDate()
  @prop()
  updatedAt: Date;

  @IsObject()
  @prop()
  billingSystemReplica?: {
    id?: string;
    name?: string;
    carrier_type?: string;
    cycle?: string;
    credit_limit?: string;
    group?: string;
  }

  @IsBoolean()
  @prop({ default: false })
  taxationEnabled: boolean;

  @IsBoolean()
  @prop({ default: false })
  tesspayFeesCalcAfterTaxes: boolean;

  @IsNumber()
  @prop({ default: 0 })
  taxAmount: number;

  @IsNumber()
  @prop()
  tpfeesToSC: number;

  @IsNumber()
  @prop()
  tpfeesToEXT: number;

  @IsBoolean()
  @prop({ default: false })
  chargeJustTesspayFees: boolean;

  @IsBoolean()
  @prop({ default: false })
  forceDailyCustomerPayment: boolean;
}
