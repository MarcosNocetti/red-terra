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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentaryService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
const documentaryRelation_repository_1 = require("../infra/repositories/documentaryRelation.repository");
let DocumentaryService = class DocumentaryService {
    constructor(documentaryRepository, documentaryRelationRepository) {
        this.documentaryRepository = documentaryRepository;
        this.documentaryRelationRepository = documentaryRelationRepository;
    }
    async create(data) {
        const { videoUrl, language } = data;
        const { relationId } = data, documentary = __rest(data, ["relationId"]);
        if (!(videoUrl === null || videoUrl === void 0 ? void 0 : videoUrl.length)) {
            return (0, errors_1.failure)({
                data: 'Documentary video url',
                message: 'Documentary must have a video url',
                success: false,
            });
        }
        if (!(await this.documentaryRepository.findRegister({ id: relationId }))) {
            return (0, errors_1.failure)({
                data: `Documentary ${relationId} does not exists`,
                message: `Documentary ${relationId} does not exists`,
                success: false,
            });
        }
        let url;
        if (videoUrl.includes('vimeo')) {
            const code = videoUrl.split('/').pop();
            url = `https://player.vimeo.com/video/${code}`;
        }
        else {
            url = videoUrl;
        }
        const newDocumentary = await this.documentaryRepository.save(Object.assign(Object.assign({}, documentary), { videoUrl: url }));
        if (relationId === null || relationId === void 0 ? void 0 : relationId.length) {
            this.documentaryRelationRepository.save({
                documentaryBrId: language === 'br' ? newDocumentary.id : relationId,
                documentaryEnId: language === 'en' ? newDocumentary.id : relationId,
            });
        }
        return (0, errors_1.success)({
            data: newDocumentary,
            message: 'Documentary created successfuly',
            success: true,
        });
    }
    async delete(documentaryId) {
        if (!(documentaryId === null || documentaryId === void 0 ? void 0 : documentaryId.length)) {
            return (0, errors_1.failure)({
                data: 'Documentary id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.documentaryRepository.findRegister({ id: documentaryId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${documentaryId} does not exist`,
                success: false,
            });
        }
        const relation = await this.documentaryRelationRepository.findRegister([
            { documentaryEnId: documentaryId },
            { documentaryBrId: documentaryId },
        ]);
        if (relation) {
            await this.documentaryRelationRepository.delete(relation.id);
        }
        const deletedId = await this.documentaryRepository.delete(documentaryId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'Documentary deleted successfuly',
            success: true,
        });
    }
    async get() {
        const documentary = await this.documentaryRepository.findRegisters();
        if (!documentary) {
            return (0, errors_1.failure)({
                message: 'No documentary found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: documentary,
            message: 'Documentary found successfully',
            success: true,
        });
    }
    async update(data) {
        var _a;
        const { id, relationId, language } = data, updatedDocumentary = __rest(data, ["id", "relationId", "language"]);
        if (!(await this.documentaryRepository.findRegister({ id: relationId }))) {
            return (0, errors_1.failure)({
                data: `Documentary ${relationId} does not exists`,
                message: `Documentary ${relationId} does not exists`,
                success: false,
            });
        }
        const documentaryExists = await this.documentaryRepository.findRegister({
            id,
        });
        if (!documentaryExists) {
            return (0, errors_1.failure)({
                message: 'No documentary found',
                success: false,
            });
        }
        if (relationId === null || relationId === void 0 ? void 0 : relationId.length) {
            if (!(await this.documentaryRepository.findRegister({ id: relationId }))) {
                return (0, errors_1.failure)({
                    data: `Documentary ${relationId} does not exists`,
                    message: `Documentary ${relationId} does not exists`,
                    success: false,
                });
            }
            else if (!(await this.documentaryRelationRepository.findRegister([
                { documentaryBrId: relationId },
                { documentaryEnId: relationId },
            ]))) {
                this.documentaryRelationRepository.save({
                    documentaryBrId: language === 'br' ? id : relationId,
                    documentaryEnId: language === 'en' ? id : relationId,
                });
            }
        }
        let url;
        if (!((_a = updatedDocumentary.videoUrl) === null || _a === void 0 ? void 0 : _a.length)) {
            url = documentaryExists.videoUrl;
        }
        else if (updatedDocumentary.videoUrl.includes('vimeo')) {
            const code = updatedDocumentary.videoUrl.split('/').pop();
            url = `https://player.vimeo.com/video/${code}`;
        }
        else {
            url = updatedDocumentary.videoUrl;
        }
        const documentary = await this.documentaryRepository.save(Object.assign(Object.assign(Object.assign({}, documentaryExists), updatedDocumentary), { videoUrl: url }));
        return (0, errors_1.success)({
            data: documentary,
            message: 'Documentary updated successfully',
            success: true,
        });
    }
};
DocumentaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.DocumentaryRepository,
        documentaryRelation_repository_1.DocumentaryRelationRepository])
], DocumentaryService);
exports.DocumentaryService = DocumentaryService;
//# sourceMappingURL=documentary.service.js.map