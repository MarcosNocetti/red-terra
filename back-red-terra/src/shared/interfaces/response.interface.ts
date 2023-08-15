import { HttpStatus } from '@nestjs/common';

export interface IResponse<T = any> {
  data?: T | string | string[];
  success: boolean;
  message?: string;
  statusCode: HttpStatus;
}
