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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../../entities");
const typeorm_1 = require("typeorm");
let UserRepository = class UserRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = dataSource.getRepository(entities_1.UserEntity);
    }
    async save(data) {
        const user = await this.repository.save(data);
        delete user.password;
        return user;
    }
    async delete(id) {
        return (await this.repository.delete({ id })).raw;
    }
    async findRegister(whereConditions, selectConditions, otherConditions) {
        return await this.repository.findOne(Object.assign(Object.assign({}, otherConditions), { select: Object.assign({}, selectConditions), where: (whereConditions === null || whereConditions === void 0 ? void 0 : whereConditions.name)
                ? Object.assign(Object.assign({}, whereConditions), { name: (0, typeorm_1.Like)(`%${whereConditions.name}%`) }) : Object.assign({}, whereConditions) }));
    }
    async findRegisters(whereConditions, selectConditions, otherConditions) {
        return await this.repository.find(Object.assign(Object.assign({}, otherConditions), { select: Object.assign({}, selectConditions), where: (whereConditions === null || whereConditions === void 0 ? void 0 : whereConditions.name)
                ? Object.assign(Object.assign({}, whereConditions), { name: (0, typeorm_1.Like)(`%${whereConditions.name}%`) }) : Object.assign({}, whereConditions) }));
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map