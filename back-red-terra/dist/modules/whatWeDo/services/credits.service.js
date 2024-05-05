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
exports.CreditsService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let CreditsService = class CreditsService {
    constructor(creditsRepository) {
        this.creditsRepository = creditsRepository;
    }
    async create(data) {
        const { language } = data, credits = __rest(data, ["language"]);
        const newCredit = await this.creditsRepository.save(Object.assign(Object.assign({}, credits), { language }));
        return (0, errors_1.success)({
            data: newCredit,
            message: 'Credit created successfuly',
            success: true,
        });
    }
    async delete(creditId) {
        if (!(creditId === null || creditId === void 0 ? void 0 : creditId.length)) {
            return (0, errors_1.failure)({
                data: 'Credit id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.creditsRepository.findRegister({ id: creditId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${creditId} does not exist`,
                success: false,
            });
        }
        const deletedId = await this.creditsRepository.delete(creditId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'Credit deleted successfuly',
            success: true,
        });
    }
    async get() {
        const credits = await this.creditsRepository.findRegisters();
        if (!credits) {
            return (0, errors_1.failure)({
                message: 'No credits found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: credits,
            message: 'Credit found successfully',
            success: true,
        });
    }
    async getByWhatWeDo(id) {
        const credits = await this.creditsRepository.findRegister({
            id,
        });
        if (!credits) {
            return (0, errors_1.failure)({
                message: 'No credits found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: credits,
            message: 'Credit found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedCredit = __rest(data, ["id"]);
        const creditsExists = await this.creditsRepository.findRegister({
            id,
        });
        if (!creditsExists) {
            return (0, errors_1.failure)({
                message: 'No credits found',
                success: false,
            });
        }
        const credits = await this.creditsRepository.save(Object.assign(Object.assign({}, creditsExists), updatedCredit));
        return (0, errors_1.success)({
            data: credits,
            message: 'Credit updated successfully',
            success: true,
        });
    }
};
CreditsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.CreditsRepository])
], CreditsService);
exports.CreditsService = CreditsService;
//# sourceMappingURL=credits.service.js.map