import { prop, modelOptions, index } from '@typegoose/typegoose';
import { IsArray, IsBoolean, IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { ObjectId } from 'mongoose';

export enum TransactionTypes {
  PAYMENT = 'payment',
  SETTLEMENT = 'settle',
  SWITCHING_FEES = 'switchingFees',
  FINANCING_FEES = 'financingFees',
  BANK_FEES = 'bankFees',
  TRAFFIC = 'traffic',
  ALLOCATION = 'allocation',
  WITHDRAW = 'withdraw',
  DEPOSIT = 'deposit',
  INTEREST = 'interest',
  WITHHOLDING = 'withholding',
  ESCROW_ALLOCATION = 'escrowAllocation',
  ESCROW_RELEASE = 'escrowRelease',
}

@index({ createdAt: 1 })
@index({ createdAt: -1 })
@index({ createdAt: -1, participantId: 1 })
@index({ participantId: 1 })
@index({ paymentRef: 1 })
@index({ fiatCurrencyId: 1 })
@index({ notes: 1 })
@index({ status: 1, createdAt: 1 })
@index({ status: 1, createdAt: -1 })
@modelOptions({ schemaOptions: { collection: 'EscrowWallet', timestamps: true, _id: true } })
export class WalletEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ enum: TransactionTypes })
  type: string;

  @IsString()
  @prop()
  ref: string;

  @IsString()
  @prop({ required: true })
  participantId: string;

  @IsString()
  @prop()
  toParticipantId: string;

  @IsString()
  @prop()
  contractId: string;

  @IsNumber()
  @prop({ required: true })
  amount: number;

  @IsString()
  @prop()
  fiatBalance: string;

  @IsString()
  @prop({ required: true })
  fiatAmount: string;

  @IsNumber()
  @prop({ required: true })
  fiatCurrencyId: number;

  @prop({ required: true })
  currency: {
    _id: string;
    currencyName: string;
  };

  @IsNumber()
  @prop({ required: true })
  status: number;

  @IsString()
  @prop()
  paymentRef: string;

  @IsString()
  @prop({ required: false })
  acpClaimNumber: string;

  @IsString()
  @prop({ required: false })
  acpClaimId: string;

  @IsString()
  @prop({ required: false })
  acpScRef: string;

  @IsDate()
  @prop()
  approvedAt: Date;

  @IsString()
  @prop()
  approvedBy: string;

  @IsDate()
  @prop()
  createdAt: Date;

  @IsDate()
  @prop()
  trafficDate: Date;

  @IsString()
  @prop()
  notes: string;

  @IsString()
  @prop()
  notesDeprecated: string;

  @IsObject()
  @prop()
  bankDetails: any;

  @IsArray()
  @prop()
  settlements: ObjectId[];

  @IsString()
  @prop()
  settlementGroupId: string;

  @IsNumber()
  @prop()
  withholdingType: number;

  @IsBoolean()
  @prop({ default: false })
  processed: boolean;
}
