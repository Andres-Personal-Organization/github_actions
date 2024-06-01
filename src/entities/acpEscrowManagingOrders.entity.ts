import { modelOptions, prop } from '@typegoose/typegoose';
import { IsBoolean, IsDate, IsNumber, IsObject, IsOptional, IsString, isNumber } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export enum AcpEscrowOrderStatus {
  ACTIVE = 'active',
  FULFILLED = 'fulfilled',
  CANCELLED = 'cancelled',
}

export enum AcpEscrowOrdersFinancingStatus {
  NOT_REQUIRED = 'not-required',
  REQUIRED = 'required',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export class AcpEscrowFinance {
  @IsString()
  @prop({ required: true, enum: AcpEscrowOrdersFinancingStatus, default: AcpEscrowOrdersFinancingStatus.NOT_REQUIRED })
  status: AcpEscrowOrdersFinancingStatus;

  @IsString()
  @IsOptional()
  @prop({ required: false })
  lenderId?: string;

  @IsNumber()
  @IsOptional()
  @prop({ required: false })
  coverage?: number;

  @IsNumber()
  @IsOptional()
  @prop({ required: false })
  fee?: number;
}
@modelOptions({ schemaOptions: { collection: 'AcpEscrowManagingOrders', timestamps: true } })
export class AcpEscrowManagingOrdersEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ required: false, unique: true })
  orderName: string;

  @IsString()
  @prop({ required: true })
  participantId: string;

  @IsString()
  @prop({ required: true })
  claimId: string;

  @IsString()
  @prop({ required: true })
  claimNumber: string;

  @IsString()
  @prop({ required: true })
  settlementId: string;

  @IsNumber()
  @prop({ required: true })
  orderQty: number;

  @IsDate()
  @prop({ required: false })
  orderDate: Date;

  @IsNumber()
  @prop({ required: true, default: 100 })
  itemPrice: number;

  @IsNumber()
  @prop({ required: true })
  orderTotal: number;

  @IsString()
  @prop({ required: true, enum: AcpEscrowOrderStatus, default: AcpEscrowOrderStatus.ACTIVE })
  status: string;

  @prop({ _id: false, type: () => AcpEscrowFinance })
  finance: AcpEscrowFinance;

  @IsString()
  @prop({ required: false })
  smartContracts: Array<string>;
}
