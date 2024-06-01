import { modelOptions, prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'VoipProtocol' } })
export class VoipProtocolEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ required: true })
  voipProtocolName: string;
}
