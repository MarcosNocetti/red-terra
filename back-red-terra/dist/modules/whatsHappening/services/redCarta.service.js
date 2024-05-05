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
exports.RedCartaService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let RedCartaService = class RedCartaService {
    constructor(redCartaRepository) {
        this.redCartaRepository = redCartaRepository;
    }
    async create(data) {
        const { language } = data, redCarta = __rest(data, ["language"]);
        const newRedCarta = await this.redCartaRepository.save(Object.assign(Object.assign({}, redCarta), { language }));
        return (0, errors_1.success)({
            data: newRedCarta,
            message: 'RedCarta created successfuly',
            success: true,
        });
    }
    async delete(redCartaId) {
        if (!(redCartaId === null || redCartaId === void 0 ? void 0 : redCartaId.length)) {
            return (0, errors_1.failure)({
                data: 'RedCarta id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.redCartaRepository.findRegister({ id: redCartaId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${redCartaId} does not exist`,
                success: false,
            });
        }
        const deletedId = await this.redCartaRepository.delete(redCartaId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'Red carta deleted successfuly',
            success: true,
        });
    }
    async get() {
        const redCarta = await this.redCartaRepository.findRegisters();
        if (!redCarta) {
            return (0, errors_1.failure)({
                message: 'No red carta found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: redCarta,
            message: 'RedCarta found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedRedCarta = __rest(data, ["id"]);
        const redCartaExists = await this.redCartaRepository.findRegister({
            id,
        });
        if (!redCartaExists) {
            return (0, errors_1.failure)({
                message: 'No red carta found',
                success: false,
            });
        }
        const redCarta = await this.redCartaRepository.save(Object.assign(Object.assign({}, redCartaExists), updatedRedCarta));
        return (0, errors_1.success)({
            data: redCarta,
            message: 'RedCarta updated successfully',
            success: true,
        });
    }
};
RedCartaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.RedCartaRepository])
], RedCartaService);
exports.RedCartaService = RedCartaService;
//# sourceMappingURL=redCarta.service.js.map