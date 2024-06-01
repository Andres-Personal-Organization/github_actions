import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { UserEntity } from '../../entities/user.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getCurrentUser(@AuthUser() user: UserEntity) {
    return this.service.getAccount(user);
  }

  @Get('tokens')
  @UseGuards(AuthGuard)
  async getUserTokens(@AuthUser() user: UserEntity) {
    return this.service.getTokens(user);
  }
}
