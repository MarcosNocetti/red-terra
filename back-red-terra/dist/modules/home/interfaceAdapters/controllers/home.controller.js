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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../../../auth/guards/authenticated.guard");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const home_service_1 = require("../../services/home.service");
const dto_1 = require("../dto");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    async getHome() {
        const result = await this.homeService.get();
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async createHome(data) {
        const result = await this.homeService.create(data);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['CREATED'] });
    }
    async updateHome(id, data) {
        const result = await this.homeService.update(Object.assign(Object.assign({}, data), { id }));
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
], HomeController.prototype, "getHome", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.HomeDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "createHome", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.HomeDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "updateHome", null);
HomeController = __decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('home'),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map