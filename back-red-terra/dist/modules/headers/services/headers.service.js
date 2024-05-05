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
exports.HeadersService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let HeadersService = class HeadersService {
    constructor(headerRepository, headerLinkRepository) {
        this.headerRepository = headerRepository;
        this.headerLinkRepository = headerLinkRepository;
    }
    async create(data) {
        const newHeader = await this.headerRepository.save(data);
        return (0, errors_1.success)({
            data: newHeader,
            message: 'Header created successfuly',
            success: true,
        });
    }
    async createLink(data) {
        const newHeader = await this.headerLinkRepository.save(data);
        return (0, errors_1.success)({
            data: newHeader,
            message: 'Header created successfuly',
            success: true,
        });
    }
    async getByLang(language) {
        const header = await this.headerRepository.findRegister({
            language,
        });
        const langHeader = Object.assign(Object.assign({}, header), { links: header.links.filter((link) => link.language === language) });
        return (0, errors_1.success)({
            data: langHeader,
            message: 'Header found successfully',
            success: true,
        });
    }
    async get() {
        const header = await this.headerRepository.findRegisters();
        return (0, errors_1.success)({
            data: header,
            message: 'Header found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedHeader = __rest(data, ["id"]);
        const headerExists = await this.headerRepository.findRegister({
            id,
        });
        if (!headerExists) {
            return (0, errors_1.failure)({
                message: 'No header found',
                success: false,
            });
        }
        const header = await this.headerRepository.save(Object.assign(Object.assign({}, headerExists), updatedHeader));
        return (0, errors_1.success)({
            data: header,
            message: 'Header updated successfully',
            success: true,
        });
    }
};
HeadersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.HeaderRepository,
        repositories_1.HeaderLinkRepository])
], HeadersService);
exports.HeadersService = HeadersService;
//# sourceMappingURL=headers.service.js.map