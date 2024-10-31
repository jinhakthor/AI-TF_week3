import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { EmailService } from './email.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, EmailService],
})
export class AuthModule {}
