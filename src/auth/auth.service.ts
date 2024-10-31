// src/auth/auth.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { UserService, User } from './user.service';
import { Notification } from 'src/notification/notification.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    @Inject('NotificationService')
    private readonly notificationService: Notification,
  ) {}

  signUp(data: any): User {
    const { name, email, password } = data;

    // 사용자 생성
    const user = this.userService.createUser(name, email, password);

    // 알림 전송
    const message = `Welcome, ${name}! Thank you for signing up.`;
    this.notificationService.send(email, message);

    return user;
  }
}
