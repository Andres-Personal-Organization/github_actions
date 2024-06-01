import { modelOptions, prop } from '@typegoose/typegoose';
import { IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

@modelOptions({ schemaOptions: { collection: 'AcpProgramProFormaClaims', timestamps: true } })
export class AcpProFormaClaimsEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ required: true })
  participantId: string;

  @IsString()
  @prop({ required: true })
  claimId: string[];

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
  claimNumber: string[];

  @IsDate()
  @prop({ required: true })
  claimPeriod: Date;

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

  @IsDate()
  @prop()
  updatedAt: Date;
}
