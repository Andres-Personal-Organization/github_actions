import { modelOptions, prop } from "@typegoose/typegoose";
import { IsString } from 'class-validator';

@modelOptions({ schemaOptions: { collection: 'Codec' } })
export class CodecsEntity {
  @IsString()
  @prop()
  _id: string;

  @IsString()
  @prop({ required: true })
  codexName: string;
}
