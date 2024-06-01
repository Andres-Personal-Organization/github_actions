import { modelOptions, prop } from '@typegoose/typegoose';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

@modelOptions({ schemaOptions: { collection: 'AcpProgramPayments', timestamps: true } })
export class AcpPaymentsEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ required: true })
  participantId: string;

  @IsString()
  @prop({ required: true })
  claimId: string[];

  @IsString()
  @prop({ required: true })
  claimNumber: string[];

  @IsDate()
  @prop({ required: true })
  claimPeriod: Date;

  @IsNumber()
  @prop({ required: true })
  govSumAmount: number;

  @IsNumber()
  @prop({ required: true })
  holdbackRelease: number;

  @IsNumber()
  @prop({ required: true })
  lenderFinanced: number;

  @IsString()
  @prop({ required: true })
  settlementGroupId: string;

  @IsDate()
  @prop()
  createdAt: Date;
}
