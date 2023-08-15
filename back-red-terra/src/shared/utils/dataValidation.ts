import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { tap } from 'rxjs';
import { HttpException } from '../exceptions';

@Injectable()
export class ValidationInterceptor implements NestInterceptor {
  private type;

  constructor(type: any) {
    this.type = type;
  }

  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();

    validate(plainToClass(this.type, req.body)).then(
      (errors: ValidationError[]) => {
        if (errors?.length) {
          const message = errors
            .map((error: ValidationError) => {
              return error?.constraints
                ? Object.values(error.constraints)
                : error?.children && this.verifyChildrenErrors(error);
            })
            .join(', ');
          return new HttpException(
            HttpStatus['NOT_ACCEPTABLE'],
            message,
            false,
          );
        }
      },
    );

    return next.handle().pipe(tap(() => console.log(`validated`)));
  }

  verifyChildrenErrors(childrenErrors: ValidationError): string {
    let error =
      childrenErrors?.children.length && Array.isArray(childrenErrors.value)
        ? `${childrenErrors.property
            .charAt(0)
            .toUpperCase()}${childrenErrors.property.slice(1)}: `
        : '';
    error += childrenErrors.children
      .map((childError) =>
        childError?.constraints
          ? Object.values(childError.constraints)
          : childError?.children && this.verifyChildrenErrors(childError),
      )
      .join(', ');

    return error;
  }
}
