// src/auth/validation.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationService {
  validateSignUpData(data: any) {
    const { name, email, password } = data;

    if (!name || !email || !password) {
      throw new BadRequestException('Invalid input');
    }

    if (!this.validateEmail(email)) {
      throw new BadRequestException('Invalid email format');
    }

    return true;
  }

  private validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
