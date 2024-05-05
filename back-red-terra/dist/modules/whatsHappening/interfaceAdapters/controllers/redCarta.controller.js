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
exports.RedCartaController = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../../../auth/guards/authenticated.guard");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const services_1 = require("../../services");
const dto_1 = require("../dto");
let RedCartaController = class RedCartaController {
    constructor(redCartaService) {
        this.redCartaService = redCartaService;
    }
    async get() {
        const result = await this.redCartaService.get();
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async createRedCarta(data) {
        const result = await this.redCartaService.create(data);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['CREATED'] });
    }
    async updateRedCarta(id, data) {
        const result = await this.redCartaService.update(Object.assign(Object.assign({}, data), { id }));
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async deleteRedCarta(id) {
        const result = await this.redCartaService.delete(id);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RedCartaController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RedCartaDto]),
    __metadata("design:returntype", Promise)
], RedCartaController.prototype, "createRedCarta", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateRedCartaDto]),
    __metadata("design:returntype", Promise)
], RedCartaController.prototype, "updateRedCarta", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RedCartaController.prototype, "deleteRedCarta", null);
RedCartaController = __decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('redCarta'),
    __metadata("design:paramtypes", [services_1.RedCartaService])
], RedCartaController);
exports.RedCartaController = RedCartaController;
//# sourceMappingURL=redCarta.controller.js.map