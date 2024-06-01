import { modelOptions, prop } from '@typegoose/typegoose';
import { IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { ClaimTypes } from './acpClaims.entity';

@modelOptions({ schemaOptions: { collection: 'AcpProgramDailyClaims', timestamps: true } })
export class AcpDailyClaimsEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ required: true })
  participantId: string;

  @IsString()
  @prop({ required: true })
  claimId: string;

  @IsDate()
  @prop({ required: true })
  nladVerificationDate: Date;

  @IsString()
  @prop({ required: true, enum: ClaimTypes })
  type: string;

  @IsNumber()
  @prop({ required: true })
  quantity: number;

  @IsNumber()
  @prop({ required: true })
  value: number;

  @IsNumber()
  @prop({ required: true })
  financed: number;

  @IsString()
  @prop({ required: true })
  claimNumber: string;

  @IsDate()
  @prop({ required: true })
  claimPeriod: Date;

  @IsDate()
  @prop({ required: true })
  paymentDueDate: Date;

  @IsObject()
  @prop({ required: true })
  summary: {
    regularSubscription?: {
      unit: number;
      total: number;
    };
    tribalSubscription?: {
      unit: number;
      total: number;
    };
    claimableDevices?: {
      unit: number;
      total: number;
    };
  };

  @IsDate()
  @prop()
  createdAt: Date;
}
