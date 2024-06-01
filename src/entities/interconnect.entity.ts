import { modelOptions, prop } from '@typegoose/typegoose';
import { IsDate, IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'Interconnect' } })
export class InterconnectEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop()
  fromId: string;

  @IsString()
  @prop()
  toId: string;

  @IsString()
  @prop()
  toEmail: string;

  @IsString()
  @prop()
  guid: string;

  @IsString()
  @prop()
  type: string;

  @IsString()
  @prop()
  status: string;

  @IsString()
  @prop()
  agreementStatus: string;

  @IsString()
  @prop()
  inviterStatus: string;

  @IsString()
  @prop()
  invitedStatus: string;

  @IsDate()
  @prop()
  signedAt: Date;

  @IsString()
  @prop()
  signedBy: string;

  @IsDate()
  @prop()
  inviterSignedAt: Date;

  @IsDate()
  @prop()
  invitedSignedAt: Date;

  @IsDate()
  @prop()
  acceptedAt: Date;

  @IsDate()
  @prop()
  createdAt: Date;

  @IsDate()
  @prop()
  updatedAt: Date;
}
