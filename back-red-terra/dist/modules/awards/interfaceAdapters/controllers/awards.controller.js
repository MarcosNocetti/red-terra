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
exports.AwardsController = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../../../auth/guards/authenticated.guard");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const awards_service_1 = require("../../services/awards.service");
const dto_1 = require("../dto");
let AwardsController = class AwardsController {
    constructor(awardsService) {
        this.awardsService = awardsService;
    }
    async getAwards() {
        const result = await this.awardsService.get();
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async getAwardsByLang(language, data) {
        let result;
        if (!data) {
            result = await this.awardsService.getByLanguage(language);
        }
        else if (data === null || data === void 0 ? void 0 : data.whoWeAreId) {
            result = await this.awardsService.getByWhoWeAre(data.whoWeAreId, language);
        }
        else if (data === null || data === void 0 ? void 0 : data.documentaryId) {
            result = await this.awardsService.getByDocumentary(data.documentaryId, language);
        }
        else {
            return {
                data: 'Award relation',
                message: 'To get an award you must pass it relation id',
                success: false,
                statusCode: common_1.HttpStatus['NOT_ACCEPTABLE'],
            };
        }
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async createAwards(data) {
        const result = await this.awardsService.create(data);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['CREATED'] });
    }
    async updateAwards(id, data) {
        const result = await this.awardsService.update(Object.assign(Object.assign({}, data), { id }));
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async deleteAward(id) {
        const result = await this.awardsService.delete(id);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
};
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AwardsController.prototype, "getAwards", null);
__decorate([
    (0, common_1.Get)(':lang'),
    __param(0, (0, common_1.Param)('lang')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AwardsController.prototype, "getAwardsByLang", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AwardsDto]),
    __metadata("design:returntype", Promise)
], AwardsController.prototype, "createAwards", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateAwardsDto]),
    __metadata("design:returntype", Promise)
], AwardsController.prototype, "updateAwards", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AwardsController.prototype, "deleteAward", null);
AwardsController = __decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('awards'),
    __metadata("design:paramtypes", [awards_service_1.AwardsService])
], AwardsController);
exports.AwardsController = AwardsController;
//# sourceMappingURL=awards.controller.js.map