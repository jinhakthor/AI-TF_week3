// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthController } from './auth.controller';
import { NotificationModule } from '../notification/notification.module';
import { EmailNotificationService } from '../notification/email-notification.service';
// 또는 SMS 알림을 사용하려면 아래를 사용합니다.
// import { SmsNotificationService } from '../notification/sms-notification.service';

@Module({
  imports: [NotificationModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    {
      provide: 'NotificationService',
      useClass: EmailNotificationService, // 여기서 원하는 알림 서비스를 선택합니다.
      // useClass: SmsNotificationService, // SMS 알림을 사용하려면 이 줄을 활성화
    },
  ],
})
export class AuthModule {}
