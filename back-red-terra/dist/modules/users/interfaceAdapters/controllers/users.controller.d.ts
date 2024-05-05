import { UserEntity } from 'src/entities';
import { IResponse } from 'src/shared/interfaces/response.interface';
import { UsersService } from '../../services/users.service';
import { UserDto } from '../dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getById(id: string): Promise<IResponse<Omit<UserEntity, 'password'>>>;
    getByEmail(email: string): Promise<IResponse<Omit<UserEntity, 'password'>>>;
    getByName(name: string): Promise<IResponse<Omit<UserEntity, 'password'>[]>>;
    getAll(): Promise<IResponse<Omit<UserEntity, 'password'>[]>>;
    create(data: UserDto): Promise<IResponse<Omit<UserEntity, 'password'>>>;
    update(data: Partial<UserDto>, id: string): Promise<IResponse<Omit<UserEntity, 'password'>>>;
    deleteUser(id: string): Promise<IResponse<UserEntity>>;
}
