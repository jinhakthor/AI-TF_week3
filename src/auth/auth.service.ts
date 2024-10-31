// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService, User } from './user.service';
import { EmailService } from './email.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
  ) {}

  signUp(data: any): User {
    const { name, email, password } = data;

    // 사용자 생성
    const user = this.userService.createUser(name, email, password);

    // 이메일 전송
    this.emailService.sendWelcomeEmail(email);

    return user;
  }
}
