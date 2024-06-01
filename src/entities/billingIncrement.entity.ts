import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'BillingIncrement' } })
export class BillingIncrementEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ required: true })
  billingIncrement: string;
}
