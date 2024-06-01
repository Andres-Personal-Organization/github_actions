import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { UserEntity } from '../../entities/user.entity';
import { ContextService } from '../../providers/context.service';
import { UserApiKeysEntity } from 'src/entities/userApiKeys.entity';

@Injectable()
export class AuthService {
  private static _authUserKey = 'user_key';

  constructor(
    // public readonly jwtService: JwtService,
    @InjectModel(UserEntity)
    private readonly repository: ReturnModelType<typeof UserEntity>,
    @InjectModel(UserApiKeysEntity)
    private readonly userApiKeysRepo: ReturnModelType<typeof UserApiKeysEntity>,
  ) {}

  static setAuthUser(user: UserEntity) {
    ContextService.set(AuthService._authUserKey, user);
  }

  static getAuthUser(): UserEntity {
    return ContextService.get(AuthService._authUserKey);
  }

  async getAccount(user: UserEntity) {
    delete user.isAdmin;
    delete user.accountType;
    delete user.participant;

    return user;
  }

  async getTokens(user: UserEntity) {
    const apiKeys = await this.userApiKeysRepo.find({ userId: user._id });
    return apiKeys;
  }

  async getUserByToken(apiToken: string): Promise<UserEntity | null> {
    const tokenEntity = await this.userApiKeysRepo.findOne({ token: apiToken });
    if (!tokenEntity) {
      return null;
    }

    const user = await this.repository.aggregate([
      {
        $match: {
          _id: tokenEntity.userId,
        },
      },
      {
        $lookup: {
          from: 'Participant',
          localField: '_id',
          foreignField: 'userId',
          as: 'participant',
        },
      },
      {
        $project: {
          _id: 1,
          email: 1,
          firstName: 1,
          lastName: 1,
          isAdmin: 1,
          accountType: 1,
          participant: {
            $arrayElemAt: ['$participant', 0],
          },
        },
      },
    ]);

    return (user[0] as UserEntity) || null;
  }
}
