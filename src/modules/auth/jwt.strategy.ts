import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from '../../entities/user.entity';
import { AuthService } from './auth.service';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ParticipantEntity } from '../../entities/participant.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService,
    @InjectModel(UserEntity)
    private readonly repository: ReturnModelType<typeof UserEntity>,
    @InjectModel(ParticipantEntity)
    private readonly participantRepository: ReturnModelType<
      typeof ParticipantEntity
    >,
  ) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${config.get('COGNITO_AUTHORITY')}/.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromHeader('authorizationinfo'),
      audience: config.get('COGNITO_CLIENT_ID'),
      issuer: config.get('COGNITO_AUTHORITY'),
      algorithms: ['RS256'],
      passReqToCallback: true,
    });
  }

  public async validate(request: any, payload: any) {
    const { sub, email } = payload;

    if (!sub || !email) {
      throw new UnauthorizedException();
    }

    const user = await this.repository.findOne({ _id: sub });
    if (!user) {
      throw new UnauthorizedException();
    }
    let participant = await this.participantRepository.findOne({
      userId: user._id,
    });

    if (user.participantParentId) {
      participant = await this.participantRepository.findOne({
        _id: user.participantParentId,
      });
    }
    return {
      ...user.toJSON(),
      participant,
    };
  }
}
