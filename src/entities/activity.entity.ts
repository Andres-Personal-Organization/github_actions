import { prop, modelOptions } from "@typegoose/typegoose";
import { IsObject, IsString} from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'activity', timestamps: true } })
export class ActivityEntity {
  @IsString()
  @prop()
  participantId?: string;

  @IsString()
  @prop({ enum: ['Account', 'Trading Partners', 'Settlements', 'Transactions', 'Routing', 'Funding Offers'] })
  category?: string;

  @IsString()
  @prop({ enum: ['Portal', 'TPAdmin'] })
  from?: string;

  @IsString()
  @prop()
  message?: string;

  @IsString()
  @prop({ enum: ['info', 'warning', 'error', 'critical'] })
  type?: string;

  @IsObject()
  @prop({})
  referenceData?: any;
}
