import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Observable } from 'rxjs';
import { UserApiKeysEntity } from 'src/entities/userApiKeys.entity';

@Injectable()
export class UserApiKeyGuard implements CanActivate {
  constructor(@InjectModel(UserApiKeysEntity) private readonly apiKeysRepo: ReturnModelType<typeof UserApiKeysEntity>) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const apiKey = request.headers['x-api-key'];
    if (!apiKey) {
      throw new UnauthorizedException();
    }

    const apiKeyEntity = this.apiKeysRepo.findOne({ key: apiKey });
    if (!apiKeyEntity) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
