import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAuthDto } from 'src/modules/users/interfaceAdapters/dto/auth';
import { IUserRepository } from 'src/modules/users/interfaces';
import { validateEmail } from 'src/shared/utils/validateEmail';
import { UserRepository } from '../../users/infra/repositories';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateToken(token: string) {
    return this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
  }

  async login(user: any): Promise<any> {
    return {
      access_token: this.jwtService.sign({
        name: user.name,
        email: user.email,
        active: user.active,
        sub: user.id,
      }),
    };
  }

  async validateUser(data: UserAuthDto) {
    const { email, password } = data;

    if (!email?.length || !validateEmail(email) || password?.length < 6) {
      return null;
    }

    const user = await this.userRepository.findRegister({ email });

    if (!user || !user.validatePassword(password)) {
      return null;
    }

    return user;
  }
}
