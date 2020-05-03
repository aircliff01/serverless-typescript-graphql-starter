export class Logger {
  readonly context: string;

  constructor(context?: string) {
    this.context = context ? `[${context}]` : '';
  }

  info(message: any) {
    console.info(`${this.context}: ${message}`);
  }

  debug(message: any) {
    console.debug(`${this.context}: ${message}`);
  }

  error(error: any, message?: string) {
    console.error(`${this.context}: ${message || ''}`, error);
  }
}
