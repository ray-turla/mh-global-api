import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly sysLog = new Logger(AppService.name);
  check(): string {
    this.sysLog.log('Start Healthcheck');
    return 'OK';
  }
}
