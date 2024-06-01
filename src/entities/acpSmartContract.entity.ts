import { modelOptions, prop } from '@typegoose/typegoose';
import { IsArray, IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export enum AcpSmartContractStatus {
  ACTIVE = 'active',
  PENDING_INVITATION = 'pending-invitation',
  WAITING_FOR_PARTNER_CONFIRMATION = 'waiting-for-partner-confirmation',
  CANCELLED = 'cancelled',
  REJECTED = 'rejected',
  FULFILLED = 'fulfilled',
  SELF_FULFILLED = 'self-fulfilled',
}

export enum AcpSmartContractProofOfFulfillmentStatus {
  APPROVED = 'approved',
  UNDER_REVIEW = 'under-review',
  REJECTED = 'rejected',
}

export type EscrowManagingProofOfFulfillment = {
  documentKey: string;
  fulfillmentDate: Date;
  deliveredQty: number;
  itemPrice: number;
  status: AcpSmartContractProofOfFulfillmentStatus;
  _id: string;
  invoiceNumber: string;
  approvedBy?: string;
  approvedOn?: Date;
  createdAt: Date;
};

type Transaction = {
  pofId?: string;
  _id: string;
};

@modelOptions({ schemaOptions: { collection: 'AcpSmartContract', timestamps: true } })
export class AcpSmartContractEntity {
  @IsString()
  @prop({ required: true, unique: true, default: () => uuidv4() })
  _id: string;

  @IsString()
  @prop({ required: true })
  ownerId: string;

  @IsString()
  @prop({ required: true })
  orderId: string;

  @IsString()
  @prop({ required: false, unique: true })
  smartContractRef: string;

  @IsString()
  @prop({ required: false })
  partnerId: string;

  @IsString()
  @prop({ required: false })
  partnerInvitedEmail: string;

  @IsDate()
  @prop({ required: true })
  dueDate: Date;

  @IsNumber()
  @prop({ required: true })
  scQty: number;

  @IsNumber()
  @prop({ required: true })
  cost: number;

  @IsString()
  @prop({ required: true, enum: AcpSmartContractStatus, default: AcpSmartContractStatus.PENDING_INVITATION })
  status: string;

  @IsArray()
  @prop()
  transactions: Array<Transaction>;

  @IsObject()
  @prop({ required: false })
  pof: Array<EscrowManagingProofOfFulfillment>;
}
