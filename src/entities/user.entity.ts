import { modelOptions, prop } from "@typegoose/typegoose";
import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';
import { ParticipantEntity } from "./participant.entity";

@modelOptions({ schemaOptions: { collection: 'user', timestamps: true } })
export class UserEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop()
  name: string;

  @IsString()
  @prop({ required: true })
  email: string;

  @IsNumber()
  @prop({ required: true })
  accountType: number;

  @IsBoolean()
  @prop({ default: false })
  isAdmin: boolean;

  @IsString()
  @prop()
  participantParentId?: string;

  @IsArray( )
  @prop()
  permissions: any[]

  participant: ParticipantEntity
}
