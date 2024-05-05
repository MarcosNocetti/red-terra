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
exports.FooterController = void 0;
const footerLink_1 = require("./../dto/footerLink");
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../../../auth/guards/authenticated.guard");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const footer_service_1 = require("../../services/footer.service");
const dto_1 = require("../dto");
let FooterController = class FooterController {
    constructor(footerService) {
        this.footerService = footerService;
    }
    async createFooter(data) {
        const result = await this.footerService.create(data);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['CREATED'] });
    }
    async updateFooter(id, data) {
        const result = await this.footerService.update(Object.assign(Object.assign({}, data), { id }));
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async createFooterLink(data) {
        const result = await this.footerService.createLink(data);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['CREATED'] });
    }
    async getFooters() {
        const result = await this.footerService.getFooters();
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async getLinks() {
        const result = await this.footerService.getLinks();
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async updateLink(id, data) {
        const result = await this.footerService.updateLink(Object.assign(Object.assign({}, data), { id }));
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async getFooter(language) {
        const result = await this.footerService.getByLanguage(language);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FooterDto]),
    __metadata("design:returntype", Promise)
], FooterController.prototype, "createFooter", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateFooterDto]),
    __metadata("design:returntype", Promise)
], FooterController.prototype, "updateFooter", null);
__decorate([
    (0, common_1.Post)('/link'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FooterLinkDto]),
    __metadata("design:returntype", Promise)
], FooterController.prototype, "createFooterLink", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FooterController.prototype, "getFooters", null);
__decorate([
    (0, common_1.Get)('/links'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FooterController.prototype, "getLinks", null);
__decorate([
    (0, common_1.Patch)('/links/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, footerLink_1.UpdateFooterLinkDto]),
    __metadata("design:returntype", Promise)
], FooterController.prototype, "updateLink", null);
__decorate([
    (0, common_1.Get)(':lang'),
    __param(0, (0, common_1.Param)('lang')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FooterController.prototype, "getFooter", null);
FooterController = __decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('footer'),
    __metadata("design:paramtypes", [footer_service_1.FooterService])
], FooterController);
exports.FooterController = FooterController;
//# sourceMappingURL=footer.controller.js.map