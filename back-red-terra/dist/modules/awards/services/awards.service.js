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
exports.AwardsService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let AwardsService = class AwardsService {
    constructor(awardsRepository) {
        this.awardsRepository = awardsRepository;
    }
    async create(data) {
        if (!(data === null || data === void 0 ? void 0 : data.documentaryId) && !(data === null || data === void 0 ? void 0 : data.whoWeAreId)) {
            return (0, errors_1.failure)({
                data: 'Award relation',
                message: 'Award must have a relation',
                success: false,
            });
        }
        const newAwards = await this.awardsRepository.save(data);
        return (0, errors_1.success)({
            data: newAwards,
            message: 'Awards created successfuly',
            success: true,
        });
    }
    async delete(awardId) {
        if (!(awardId === null || awardId === void 0 ? void 0 : awardId.length)) {
            return (0, errors_1.failure)({
                data: 'Award id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.awardsRepository.findRegister({ id: awardId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${awardId} does not exist`,
                success: false,
            });
        }
        const deletedId = await this.awardsRepository.delete(awardId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'Award deleted successfuly',
            success: true,
        });
    }
    async get() {
        const awards = await this.awardsRepository.findRegisters();
        if (!awards) {
            return (0, errors_1.failure)({
                message: 'No awards found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: awards,
            message: 'Awards found successfully',
            success: true,
        });
    }
    async getByLanguage(language) {
        const awards = await this.awardsRepository.findRegister({
            language,
        });
        if (!awards) {
            return (0, errors_1.failure)({
                message: 'No awards found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: awards,
            message: 'Awards found successfully',
            success: true,
        });
    }
    async getByWhoWeAre(whoWeAreId, language) {
        const whereAward = language
            ? {
                whoWeAreId,
                language,
            }
            : {
                whoWeAreId,
            };
        const awards = await this.awardsRepository.findRegisters(whereAward);
        if (!awards.length) {
            return (0, errors_1.failure)({
                message: 'No awards found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: awards,
            message: 'Awards found successfully',
            success: true,
        });
    }
    async getByDocumentary(documentaryId, language) {
        const whereAward = language
            ? {
                documentaryId,
                language,
            }
            : {
                documentaryId,
            };
        const awards = await this.awardsRepository.findRegisters(whereAward);
        if (!awards.length) {
            return (0, errors_1.failure)({
                message: 'No awards found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: awards,
            message: 'Awards found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedAwards = __rest(data, ["id"]);
        const awardsExists = await this.awardsRepository.findRegister({
            id,
        });
        if (!awardsExists) {
            return (0, errors_1.failure)({
                message: 'No awards found',
                success: false,
            });
        }
        const awards = await this.awardsRepository.save(Object.assign(Object.assign({}, awardsExists), updatedAwards));
        return (0, errors_1.success)({
            data: awards,
            message: 'Awards updated successfully',
            success: true,
        });
    }
};
AwardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.AwardsRepository])
], AwardsService);
exports.AwardsService = AwardsService;
//# sourceMappingURL=awards.service.js.map