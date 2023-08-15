import { HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { HttpException } from 'src/shared/exceptions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({
      email: username,
      password,
    });
    if (!user) {
      throw new HttpException(
        HttpStatus['NOT_ACCEPTABLE'],
        'Not authenticated',
        false,
      );
    }

    return user;
  }
}
