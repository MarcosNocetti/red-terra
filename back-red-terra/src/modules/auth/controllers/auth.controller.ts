import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/modules/auth/guards/local-auth.guard';
import { IResponse } from 'src/shared/interfaces';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async authenticate(
    @Request() data: any,
  ): Promise<IResponse<{ token: string; refresh?: string }>> {
    const result = await this.authService.login(data.user);

    return {
      data: result,
      message: 'Successfully logged',
      success: true,
      statusCode: HttpStatus['OK'],
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  async validateToken() {
    return {
      message: 'Token is valid',
      success: true,
      statusCode: HttpStatus['OK'],
    };
  }
}
