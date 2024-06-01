import { prop, modelOptions } from '@typegoose/typegoose';
import { IsArray, IsBoolean, IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { NLADStatus } from './acpNladVerifiedSubmissions.entity';

@modelOptions({ schemaOptions: { collection: 'Participant' } })
export class ParticipantEntity {
  @IsString()
  @prop({ required: true })
  _id?: string;

  @IsString()
  @prop()
  userId: string;

  @IsString()
  @prop()
  partition: string;

  @IsString()
  @prop()
  businessTypeId: string;

  @IsString()
  @prop()
  addressId: string;

  @IsString()
  @prop()
  participantName: string;

  @IsString()
  @prop()
  contactPerson: string;

  @IsString()
  @prop()
  taxId: string;

  @IsString()
  @prop()
  phoneNumber: string;

  @IsString()
  @prop()
  faxNumber: string;

  @IsString()
  @prop()
  phonePrefixId: string;

  @IsNumber()
  @prop()
  status: number;

  @IsString()
  @prop()
  walletAddress: string;

  @IsString()
  @prop()
  registrationNumber: string;

  @IsString()
  @prop()
  logo: string;

  @IsString()
  @prop()
  carrierId: string;

  @IsDate()
  @prop()
  agreementSignedAt: Date;

  @IsString()
  @prop()
  carrierGroupId: string;

  @IsString()
  @prop()
  currencyId: string;

  @IsArray()
  @prop()
  restrictedLenderContractIds: any[];

  @IsNumber()
  @prop()
  capitalProvided: number;

  @IsNumber()
  @prop()
  deployedToSC: number;

  @IsNumber()
  @prop()
  capitalAppreciationToDate: number;

  @IsNumber()
  @prop()
  capitalAppreciationExpected: number;

  @IsObject()
  @prop()
  acpProgram?: {
    active: boolean;
    lenderId: string;
    lenderFinanceFeePercent: number;
    lenderCoveragePercent: number;
    archive?: {
      olderThanMonths?: number;
      withStatus?: NLADStatus[];
    };
  };

  @IsObject()
  @prop()
  acpSmartContract?: {
    active: boolean;
  };

  @IsBoolean()
  @prop({ default: false })
  isVirtualAccount: boolean;
}
