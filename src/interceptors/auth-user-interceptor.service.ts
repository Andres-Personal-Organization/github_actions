import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { AuthService } from '../modules/auth/auth.service';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { UserEntity } from '../entities/user.entity';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
  constructor(
    @InjectModel(UserEntity)
    private readonly repository: ReturnModelType<typeof UserEntity>,
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const user = <UserEntity>request.user;
    AuthService.setAuthUser(user);

    return next.handle();
  }
}
