import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export declare class ValidationInterceptor implements NestInterceptor {
    private type;
    constructor(type: any);
    intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<any>;
    verifyChildrenErrors(childrenErrors: ValidationError): string;
}
