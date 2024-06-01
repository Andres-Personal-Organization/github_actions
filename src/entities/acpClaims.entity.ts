import { modelOptions, prop } from '@typegoose/typegoose';
import { IsArray, IsBoolean, IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export enum ClaimTypes {
  SALES = 'sales',
  MRC = 'mrc',
  CLAIMABLE_DEVICE = 'claimable-devices',
}

export type regularSubscription = {
  total: number;
  unit: number;
};

export type tribalSubscription = {
  total: number;
  unit: number;
};

@modelOptions({ schemaOptions: { collection: 'AcpProgramClaims', timestamps: true } })
export class AcpClaimsEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ required: true })
  claimNumber: string;

  @IsString()
  @prop({ required: true })
  participantId?: string;

  @IsString()
  @prop({ required: true, enum: ClaimTypes })
  type: string;

  @IsDate()
  @prop({ required: true })
  claimPeriod: Date;

  @IsString()
  @prop()
  fileName: string;

  @IsBoolean()
  @prop({ default: false })
  isProcessed: boolean;

  // TODO validator to see if the user has the acp smartContract enabled if true => isApplicableForContract will be true
  @IsBoolean()
  @prop({ required: false, default: false })
  isApplicableForContract: boolean;

  @IsArray()
  @prop({ required: true })
  data: Array<any>;

  @IsObject()
  @prop({ required: false })
  totalRegularSubscription?: {
    total: number;
    unit: number;
  };

  @IsObject()
  @prop({ required: false })
  totalTribal?: {
    total: number;
    unit: number;
  };

  @IsNumber()
  @prop({ required: true })
  total: number;

  @IsNumber()
  @prop({ required: true })
  quantity: number;

  @IsNumber()
  @prop({ required: false })
  totalDuplicates?: number;

  @IsDate()
  @prop()
  createdAt: Date;

  @IsDate()
  @prop()
  uploadedAt: Date;
}
