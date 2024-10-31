// src/auth/email.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  sendWelcomeEmail(to: string) {
    // 실제 이메일 전송 로직 대신 콘솔 출력
    console.log(`Sending welcome email to ${to}`);
  }
}
