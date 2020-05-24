import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from '../logger/logger';
import { MDC } from './MDC';

@Injectable()
export class MDCMiddleware implements NestMiddleware {

  async use(req: Request, res: Response, next: Function): Promise<any> {
    const context = MDC.create();

    const logger = new Logger();

    context.run(async () => {
      MDC.setLogger(logger);
      next();
    });
  }

}