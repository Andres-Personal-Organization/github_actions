import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserEntity } from '../../entities/user.entity';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import {ParticipantEntity} from "../../entities/participant.entity";
import { UserApiKeysEntity } from '../../entities/userApiKeys.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypegooseModule.forFeature([
      UserEntity,
      ParticipantEntity,
      UserApiKeysEntity
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule.register({ defaultStrategy: 'jwt' }), AuthService],
})
export class AuthModule {}
