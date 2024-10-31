// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { UserService, User } from './user.service';
import { EmailService } from './email.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly validationService: ValidationService,
    private readonly userService: UserService,
    private readonly emailService: EmailService,
    private readonly loggerService: LoggerService,
  ) {}

  signUp(data: any): User {
    // 유효성 검증
    this.validationService.validateSignUpData(data);
    this.loggerService.log('Validation passed.');

    const { name, email, password } = data;

    // 사용자 생성
    const user = this.userService.createUser(name, email, password);
    this.loggerService.log(`User created: ${JSON.stringify(user)}`);

    // 이메일 전송
    this.emailService.sendWelcomeEmail(email);
    this.loggerService.log('Welcome email sent.');

    return user;
  }
}
