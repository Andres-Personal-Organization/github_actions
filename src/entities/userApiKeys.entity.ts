import { modelOptions, prop } from '@typegoose/typegoose';
import { IsDate, IsString } from 'class-validator';

@modelOptions({
  schemaOptions: { collection: 'user_api_keys', timestamps: true },
})
export class UserApiKeysEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop()
  userId: string;

  @IsString()
  @prop({ required: false })
  participantId?: string;

  @IsString()
  @prop()
  token: string;

  @IsDate()
  @prop()
  createdAt: Date;
}
