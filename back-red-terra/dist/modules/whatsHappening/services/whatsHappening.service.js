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
exports.WhatsHappeningService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let WhatsHappeningService = class WhatsHappeningService {
    constructor(whatsHappeningRepository) {
        this.whatsHappeningRepository = whatsHappeningRepository;
    }
    async create(data) {
        const { language } = data, whatsHappening = __rest(data, ["language"]);
        const newWhatsHappening = await this.whatsHappeningRepository.save(Object.assign(Object.assign({}, whatsHappening), { language }));
        return (0, errors_1.success)({
            data: newWhatsHappening,
            message: 'Whats happening created successfuly',
            success: true,
        });
    }
    async get() {
        const whatsHappening = await this.whatsHappeningRepository.findRegisters();
        return (0, errors_1.success)({
            data: whatsHappening,
            message: 'Whats happening found successfully',
            success: true,
        });
    }
    async getByLanguage(language) {
        const whatsHappening = await this.whatsHappeningRepository.findRegister({
            language,
        });
        return (0, errors_1.success)({
            data: whatsHappening,
            message: 'Whats happening found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedWhatsHappening = __rest(data, ["id"]);
        const whatsHappeningExists = await this.whatsHappeningRepository.findRegister({
            id,
        });
        if (!whatsHappeningExists) {
            return (0, errors_1.failure)({
                message: 'No whatsHappening found',
                success: false,
            });
        }
        const whatsHappening = await this.whatsHappeningRepository.save(Object.assign(Object.assign({}, whatsHappeningExists), updatedWhatsHappening));
        return (0, errors_1.success)({
            data: whatsHappening,
            message: 'Whats happening updated successfully',
            success: true,
        });
    }
};
WhatsHappeningService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.WhatsHappeningRepository])
], WhatsHappeningService);
exports.WhatsHappeningService = WhatsHappeningService;
//# sourceMappingURL=whatsHappening.service.js.map