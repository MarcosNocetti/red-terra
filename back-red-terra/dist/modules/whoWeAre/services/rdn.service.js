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
exports.RdnService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let RdnService = class RdnService {
    constructor(rdnRepository) {
        this.rdnRepository = rdnRepository;
    }
    async create(data) {
        const { language } = data, rdn = __rest(data, ["language"]);
        const newRdn = await this.rdnRepository.save(Object.assign(Object.assign({}, rdn), { language }));
        return (0, errors_1.success)({
            data: newRdn,
            message: 'Rdn created successfuly',
            success: true,
        });
    }
    async delete(rdnId) {
        if (!(rdnId === null || rdnId === void 0 ? void 0 : rdnId.length)) {
            return (0, errors_1.failure)({
                data: 'Rdn id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.rdnRepository.findRegister({ id: rdnId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${rdnId} does not exist`,
                success: false,
            });
        }
        const deletedId = await this.rdnRepository.delete(rdnId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'Rdn deleted successfuly',
            success: true,
        });
    }
    async get() {
        const rdn = await this.rdnRepository.findRegisters();
        if (!rdn) {
            return (0, errors_1.failure)({
                message: 'No rdn found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: rdn,
            message: 'Rdn found successfully',
            success: true,
        });
    }
    async getByWhatWeDo(id) {
        const rdn = await this.rdnRepository.findRegister({
            id,
        });
        if (!rdn) {
            return (0, errors_1.failure)({
                message: 'No rdn found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: rdn,
            message: 'Rdn found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedRdn = __rest(data, ["id"]);
        const rdnExists = await this.rdnRepository.findRegister({
            id,
        });
        if (!rdnExists) {
            return (0, errors_1.failure)({
                message: 'No rdn found',
                success: false,
            });
        }
        const rdn = await this.rdnRepository.save(Object.assign(Object.assign({}, rdnExists), updatedRdn));
        return (0, errors_1.success)({
            data: rdn,
            message: 'Rdn updated successfully',
            success: true,
        });
    }
};
RdnService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.RdnRepository])
], RdnService);
exports.RdnService = RdnService;
//# sourceMappingURL=rdn.service.js.map