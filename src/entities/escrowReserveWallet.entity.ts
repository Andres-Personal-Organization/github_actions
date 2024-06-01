import { prop, modelOptions } from '@typegoose/typegoose';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { TransactionTypes } from './wallet.entity';

@modelOptions({ schemaOptions: { collection: 'EscrowReserveWallet', timestamps: true } })
export class EscrowReserveWalletEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ enum: TransactionTypes })
  type: string;

  @IsString()
  @prop({ required: true })
  participantId: string;

  @IsString()
  @prop()
  toParticipantId: string;

  @IsNumber()
  @prop({ required: true })
  amount: number;

  @prop({ required: true })
  currency: {
    _id: string;
    currencyName: string;
  };

  @IsNumber()
  @prop({ required: true })
  status: number;

  @IsString()
  @prop({ required: true })
  fiatAmount: string;

  @IsNumber()
  @prop({ required: true })
  fiatCurrencyId: number;

  @IsString()
  @prop({ required: true, unique: true })
  ref: string;

  @IsString()
  @prop({ required: false })
  acpClaimNumber?: string;

  @IsString()
  @prop({ required: false })
  acpClaimId?: string;

  @IsString()
  @prop({ required: false })
  acpScRef?: string;

  @IsString()
  @prop({ required: false })
  deviceOrderId?: string;
}
