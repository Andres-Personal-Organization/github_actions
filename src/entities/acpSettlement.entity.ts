import { modelOptions, prop } from '@typegoose/typegoose';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

class Summary {
  @IsNumber()
  @prop()
  totalUsage: number;

  @IsNumber()
  @prop()
  totalAmountDue: number;

  @IsNumber()
  @prop()
  totals: number;

  @IsObject()
  @prop()
  regularSubscription: {
    unit: number;
    total: number;
  };

  @IsNumber()
  @prop()
  claimableDevices: number;

  @IsObject()
  @prop()
  tribalSubscription: {
    unit: number;
    total: number;
  };
}

class Participant {
  @IsString()
  @prop()
  id: string;

  @IsString()
  @prop()
  name: string;

  @IsNumber()
  @prop()
  transactionAmount: number;
}

class Lender {
  @IsString()
  @prop({ required: false })
  id?: string;

  @IsString()
  @prop({ required: false })
  name?: string;

  @IsNumber()
  @prop({ required: false, default: 90 })
  lenderCoveragePercent?: number;

  @IsNumber()
  @prop({ required: false, default: 1.8 })
  lenderFinanceFeePercent?: number;

  @IsNumber()
  @prop({ required: false })
  financeFee?: number;

  @IsNumber()
  @prop({ required: false })
  transactionAmount?: number;
}

@modelOptions({ schemaOptions: { collection: 'AcpProgramSettlements', timestamps: true } })
export class AcpSettlementsEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsObject()
  @prop()
  @ValidateNested()
  @Type(() => Summary)
  summary: Summary;

  @IsObject()
  @prop()
  @ValidateNested()
  @Type(() => Participant)
  participant: Participant;

  @IsObject()
  @prop()
  @ValidateNested()
  @Type(() => Lender)
  lender?: Lender;

  @IsNumber()
  @prop()
  amount: number;

  @IsBoolean()
  @prop({ required: false, default: false })
  settled: boolean;

  @IsDate()
  @prop({ required: false, default: '' })
  settledAt?: Date;

  @IsString()
  @prop({ required: false, default: '' })
  settledBy?: string;

  @IsString()
  @prop({ required: false, default: '' })
  settlementGroupId?: string;

  @IsString()
  @prop({ required: true, default: '' })
  invoiceId: string;

  @IsString()
  @prop({ required: false, default: '' })
  invoiceNumber?: string;

  @IsString()
  @prop({ required: true })
  claimId: string;

  @IsDate()
  @prop({ required: true })
  claimPeriod: Date;

  @IsBoolean()
  @prop({ required: false, default: false })
  hasManagingOrder: boolean;
}
