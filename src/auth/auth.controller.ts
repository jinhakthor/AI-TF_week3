// src/auth/auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signUp(@Body() body: any) {
    const { name, email, password } = body;

    // 유효성 검증
    if (!name || !email || !password) {
      throw new BadRequestException('Invalid input');
    }

    if (!this.validateEmail(email)) {
      throw new BadRequestException('Invalid email format');
    }

    // 사용자 생성 (모킹)
    const user = { id: Date.now(), name, email, password };

    // 이메일 전송 (모킹)
    this.sendEmail(email, 'Welcome!', 'Thank you for signing up.');

    // 로깅 (모킹)
    console.log(`User created: ${JSON.stringify(user)}`);

    return { message: 'User registered successfully', user };
  }

  validateEmail(email: string): boolean {
    // 간단한 이메일 정규식
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  sendEmail(to: string, subject: string, body: string) {
    // 실제 이메일 전송 대신 콘솔에 출력
    console.log(`Sending email to ${to} with subject "${subject}"`);
  }
}
