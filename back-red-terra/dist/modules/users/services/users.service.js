"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const encrypt_1 = require("../../../shared/utils/encrypt");
const validateEmail_1 = require("../../../shared/utils/validateEmail");
const repositories_1 = require("../infra/repositories");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(data) {
        if (!(0, validateEmail_1.validateEmail)(data === null || data === void 0 ? void 0 : data.email)) {
            return (0, errors_1.failure)({
                data: 'Invalid email',
                message: 'Cannot create user with invalid email',
                success: false,
            });
        }
        if (!!(await this.userRepository.findRegister({ email: data.email }))) {
            return (0, errors_1.failure)({
                data: 'Invalid email',
                message: 'Email already in use',
                success: false,
            });
        }
        if ((data === null || data === void 0 ? void 0 : data.name.length) < 4) {
            return (0, errors_1.failure)({
                data: 'Name length',
                message: 'Name must have at least 4 characters',
                success: false,
            });
        }
        if (!(data === null || data === void 0 ? void 0 : data.password)) {
            data.password = (0, encrypt_1.encrypt)('123');
        }
        else {
            if (data.password.length < 6) {
                return (0, errors_1.failure)({
                    data: 'Password length',
                    message: 'Password must have at least 6 characters',
                    success: false,
                });
            }
            data.password = (0, encrypt_1.encrypt)(data.password);
        }
        const createdUser = await this.userRepository.save(data);
        return (0, errors_1.success)({
            data: createdUser,
            message: 'User created successfully',
            success: true,
        });
    }
    async delete(userId) {
        if (!(userId === null || userId === void 0 ? void 0 : userId.length)) {
            return (0, errors_1.failure)({
                data: 'User id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.userRepository.findRegister({ id: userId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${userId} does not exist`,
                success: false,
            });
        }
        const deletedId = await this.userRepository.delete(userId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'User deleted successfuly',
            success: true,
        });
    }
    async get(userParams) {
        const user = await this.userRepository.findRegister(userParams);
        if (!user) {
            return (0, errors_1.failure)({
                message: 'No user found',
                success: true,
            });
        }
        return (0, errors_1.success)({
            data: user,
            message: 'Users found successfully',
            success: true,
        });
    }
    async getAll(whereConditions, selectConditions, otherConditions) {
        const users = await this.userRepository.findRegisters(whereConditions, selectConditions, otherConditions);
        if (!users.length) {
            return (0, errors_1.failure)({
                message: 'No users found',
                success: true,
            });
        }
        return (0, errors_1.success)({
            data: users,
            message: 'Users found successfully',
            success: true,
        });
    }
    async updateRegister(whereConditions, updatedData) {
        const user = await this.userRepository.findRegister(whereConditions);
        if (!user) {
            return (0, errors_1.failure)({
                message: 'No user found',
                success: true,
            });
        }
        if (!updatedData) {
            return (0, errors_1.failure)({
                message: 'Nothing to update',
                success: false,
            });
        }
        if (updatedData === null || updatedData === void 0 ? void 0 : updatedData.password) {
            if (updatedData.password.length < 6) {
                return (0, errors_1.failure)({
                    data: 'Password length',
                    message: 'Password must have at least 6 characters',
                    success: false,
                });
            }
            updatedData.password = (0, encrypt_1.encrypt)(updatedData.password);
            if (!user.active) {
                updatedData.active = true;
            }
        }
        const updatedUser = await this.userRepository.save(Object.assign(Object.assign({}, user), updatedData));
        return (0, errors_1.success)({
            data: updatedUser,
            message: 'User updated successfully',
            success: true,
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map