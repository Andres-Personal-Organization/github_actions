import { AuthGuard as NestAuthGuard } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TokenExpiredError } from 'jsonwebtoken';

// This should be used as guard class
// eslint-disable-next-line @typescript-eslint/naming-convention
// export const AuthGuard = NestAuthGuard('jwt');
@Injectable()
export class AuthGuard extends NestAuthGuard('jwt') {
  handleRequest(err, user, info: Error) {
    if (info instanceof TokenExpiredError) {
      throw new UnauthorizedException();
    }
    if(!user) {
      throw new UnauthorizedException()
    }
    return user;
  }
}
