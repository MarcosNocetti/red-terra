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
exports.DocumentaryController = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../../../auth/guards/authenticated.guard");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const services_1 = require("../../services");
const dto_1 = require("../dto");
const documentaryRelation_repository_1 = require("../../infra/repositories/documentaryRelation.repository");
let DocumentaryController = class DocumentaryController {
    constructor(documentaryService, documentaryRelationRepository) {
        this.documentaryService = documentaryService;
        this.documentaryRelationRepository = documentaryRelationRepository;
    }
    async getDocumentary() {
        const result = await this.documentaryService.get();
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async getDocumentaryByRelation(id) {
        try {
            const result = await this.documentaryRelationRepository.findRegisters([
                { documentaryBrId: id },
                { documentaryEnId: id },
            ]);
            return {
                data: result,
                success: true,
                message: 'Documentaries found successfully.',
                statusCode: common_1.HttpStatus['OK'],
            };
        }
        catch (e) {
            return {
                success: false,
                message: 'Error searching documentaries.',
                statusCode: common_1.HttpStatus['NOT_ACCEPTABLE'],
            };
        }
    }
    async createDocumentary(data) {
        const result = await this.documentaryService.create(data);
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['CREATED'] });
    }
    async updateDocumentary(id, data) {
        const result = await this.documentaryService.update(Object.assign(Object.assign({}, data), { id }));
        return Object.assign(Object.assign({}, result.value), { statusCode: result.isFailure()
                ? common_1.HttpStatus['NOT_ACCEPTABLE']
                : common_1.HttpStatus['OK'] });
    }
    async deleteDocumentary(id) {
        const result = await this.documentaryService.delete(id);
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
], DocumentaryController.prototype, "getDocumentary", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentaryController.prototype, "getDocumentaryByRelation", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DocumentaryDto]),
    __metadata("design:returntype", Promise)
], DocumentaryController.prototype, "createDocumentary", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateDocumentaryDto]),
    __metadata("design:returntype", Promise)
], DocumentaryController.prototype, "updateDocumentary", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentaryController.prototype, "deleteDocumentary", null);
DocumentaryController = __decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('documentary'),
    __metadata("design:paramtypes", [services_1.DocumentaryService,
        documentaryRelation_repository_1.DocumentaryRelationRepository])
], DocumentaryController);
exports.DocumentaryController = DocumentaryController;
//# sourceMappingURL=documentary.controller.js.map