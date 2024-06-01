import { modelOptions, prop } from '@typegoose/typegoose';
import { IsArray, IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { ClaimTypes } from './acpClaims.entity';

export enum NLADStatus {
  PENDING = 'pending',
  PROCESSED = 'processed',
  REJECTED = 'rejected',
}

@modelOptions({ schemaOptions: { collection: 'AcpProgramNladVerifiedSubmissions', timestamps: true } })
export class AcpNladVerifiedSubmissionsEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ required: true })
  participantId: string;

  @IsString()
  @prop({ required: true })
  claimId: string;

  @IsString()
  @prop({ required: true })
  claimType: ClaimTypes;

  @IsString()
  @prop({ required: true })
  claimNumber: string;

  @IsString()
  @IsOptional()
  @prop({ required: false, default: () => '' })
  notes?: string;

  @IsDate()
  @prop({ required: true })
  claimPeriod: Date;

  @IsArray()
  @prop({ required: true })
  data: Array<any>;

  @IsNumber()
  @prop({ required: true })
  quantity: number;

  @IsNumber()
  @prop({ required: true })
  value: number;

  @IsDate()
  @prop()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  @prop()
  nladVerificationDate?: Date;

  @IsString()
  @IsOptional()
  @prop()
  reasonForRejection?: string;

  @IsString()
  @prop({ required: true, enum: NLADStatus })
  nladVerificationStatus: NLADStatus;

  @IsBoolean()
  @IsOptional()
  @prop({ required: false, default: false })
  isArchived?: boolean;

  @IsOptional()
  @IsBoolean()
  @prop({ default: false })
  hasManagingOrder?: boolean;
}
