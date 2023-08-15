import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private logger: Logger = new Logger(this.constructor.name);
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    this.logger.error(exception);

    const res: any =
      exception instanceof HttpException
        ? exception.getResponse()
        : { statusCode: 500, message: 'Internal Server Error', success: false };

    if (typeof res === 'object' && !res?.success) {
      res.success = false;
    }

    response.status(status).send(res);
  }
}
