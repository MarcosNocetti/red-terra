import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { addMinutes, addWeeks } from 'date-fns';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse } from '../interfaces/response.interface';

@Injectable()
export class ResponseIntereceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: IResponse<any>) => {
        const response = context.switchToHttp().getResponse<Response>();

        response.statusCode = data.statusCode;
        response.statusMessage = HttpStatus[data.statusCode]
          .split('_')
          .join(' ');
        response.status(data.statusCode);

        if (data?.data?.refresh && data?.data?.token) {
          response.cookie('refresh', data.data.refresh, {
            secure: process.env.NODE_ENV !== 'development',
            httpOnly: true,
            expires: addWeeks(new Date(), 1),
          });

          response.cookie('token', data.data.token, {
            secure: process.env.NODE_ENV !== 'development',
            httpOnly: true,
            expires: addMinutes(new Date(), 5),
          });

          data = data.data.user;
        }

        return data;
      }),
    );
  }
}
