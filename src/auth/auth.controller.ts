// src/auth/auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: any): Promise<{ message: string; user: User }> {
    try {
      const user = this.authService.signUp(body);
      return { message: 'User registered successfully', user };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
