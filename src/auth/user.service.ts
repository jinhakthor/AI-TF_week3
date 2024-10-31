// src/auth/user.service.ts
import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = []; // 간단한 메모리 DB

  createUser(name: string, email: string, password: string): User {
    const user: User = {
      id: Date.now(),
      name,
      email,
      password,
    };
    this.users.push(user);
    return user;
  }

  // 추가적인 사용자 관련 메소드 구현 가능
}
