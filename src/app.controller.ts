import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MDC } from './context/mdc';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const logger = MDC.getLogger();

    logger.info('Logged into controller');

    return this.appService.getHello();
  }
}
