// src/notification/sms-notification.service.ts
import { Injectable } from '@nestjs/common';
import { Notification } from './notification.interface';

@Injectable()
export class SmsNotificationService implements Notification {
  send(to: string, message: string): void {
    // 실제 SMS 전송 로직 대신 콘솔 출력 (모킹)
    console.log(`Sending SMS to ${to}: ${message}`);
  }
}
