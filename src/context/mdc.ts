import { Namespace, getNamespace, createNamespace } from 'cls-hooked';
import { Logger } from '../logger/logger';

export class MDC {
  static context(): Namespace {
    return getNamespace('default')
  }

  static create(): Namespace {
    return createNamespace('default')
  }

  static getLogger(): Logger {
    return this.context().get('logger')
  }

  static setLogger(logger: Logger): void {
    this.context().set('logger', logger);
  }
}