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
exports.FooterService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let FooterService = class FooterService {
    constructor(footerRepository, footerLinkRepository) {
        this.footerRepository = footerRepository;
        this.footerLinkRepository = footerLinkRepository;
    }
    async create(data) {
        const { language } = data;
        if (!language) {
            return (0, errors_1.failure)({
                data: 'Footer language',
                message: 'Footer must have a language',
                success: false,
            });
        }
        const newFooter = await this.footerRepository.save(data);
        return (0, errors_1.success)({
            data: newFooter,
            message: 'Footer created successfuly',
            success: true,
        });
    }
    async createLink(data) {
        const newFooter = await this.footerLinkRepository.save(Object.assign(Object.assign({}, data), { footerId: '1' }));
        return (0, errors_1.success)({
            data: newFooter,
            message: 'Footer created successfuly',
            success: true,
        });
    }
    async getByLanguage(language) {
        const footer = await this.footerRepository.findRegister({
            language,
        });
        return (0, errors_1.success)({
            data: footer,
            message: 'Footer found successfully',
            success: true,
        });
    }
    async getFooters() {
        const footers = await this.footerRepository.findRegisters();
        return (0, errors_1.success)({
            data: footers,
            message: 'Footers found successfully',
            success: true,
        });
    }
    async getLinks() {
        const links = await this.footerLinkRepository.findRegisters();
        return (0, errors_1.success)({
            data: links,
            message: 'Footer links found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedFooter = __rest(data, ["id"]);
        const footerExists = await this.footerRepository.findRegister({
            id,
        });
        if (!footerExists) {
            return (0, errors_1.failure)({
                message: 'No footer found',
                success: false,
            });
        }
        const footer = await this.footerRepository.save(Object.assign(Object.assign({}, footerExists), updatedFooter));
        return (0, errors_1.success)({
            data: footer,
            message: 'Footer updated successfully',
            success: true,
        });
    }
    async updateLink(data) {
        const { id } = data, updatedFooterLink = __rest(data, ["id"]);
        const footerLinkExists = await this.footerLinkRepository.findRegister({
            id,
        });
        if (!footerLinkExists) {
            return (0, errors_1.failure)({
                message: 'No footer link found',
                success: false,
            });
        }
        const footerLink = await this.footerLinkRepository.save(Object.assign(Object.assign({}, footerLinkExists), updatedFooterLink));
        return (0, errors_1.success)({
            data: footerLink,
            message: 'Footer link updated successfully',
            success: true,
        });
    }
};
FooterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.FooterRepository,
        repositories_1.FooterLinkRepository])
], FooterService);
exports.FooterService = FooterService;
//# sourceMappingURL=footer.service.js.map