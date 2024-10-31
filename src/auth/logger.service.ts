// src/auth/logger.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string) {
    // 실제 로깅 로직 대신 콘솔 출력
    console.log(`[LOG]: ${message}`);
  }
}
