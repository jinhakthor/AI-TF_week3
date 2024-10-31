// src/notification/email-notification.service.ts
import { Injectable } from '@nestjs/common';
import { Notification } from './notification.interface';

@Injectable()
export class EmailNotificationService implements Notification {
  send(to: string, message: string): void {
    // 실제 이메일 전송 로직 대신 콘솔 출력 (모킹)
    console.log(`Sending Email to ${to}: ${message}`);
  }
}
