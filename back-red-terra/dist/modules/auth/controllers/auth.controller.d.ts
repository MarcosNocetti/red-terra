import { HttpStatus } from '@nestjs/common';
import { IResponse } from 'src/shared/interfaces';
import { AuthService } from '../services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authenticate(data: any): Promise<IResponse<{
        token: string;
        refresh?: string;
    }>>;
    validateToken(): Promise<{
        message: string;
        success: boolean;
        statusCode: HttpStatus;
    }>;
}
