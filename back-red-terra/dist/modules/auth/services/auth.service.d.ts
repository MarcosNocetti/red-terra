import { JwtService } from '@nestjs/jwt';
import { UserAuthDto } from 'src/modules/users/interfaceAdapters/dto/auth';
import { IUserRepository } from 'src/modules/users/interfaces';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: IUserRepository, jwtService: JwtService);
    validateToken(token: string): Promise<any>;
    login(user: any): Promise<any>;
    validateUser(data: UserAuthDto): Promise<import("../../../entities").UserEntity>;
}
