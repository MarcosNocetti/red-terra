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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let HomeService = class HomeService {
    constructor(homeRepository) {
        this.homeRepository = homeRepository;
    }
    async create(data) {
        const { videoUrl } = data;
        if (!(videoUrl === null || videoUrl === void 0 ? void 0 : videoUrl.length)) {
            return (0, errors_1.failure)({
                data: 'Home video url',
                message: 'Home must have a video url',
                success: false,
            });
        }
        const _a = await this.homeRepository.save({
            videoUrl,
        }), { language } = _a, newHome = __rest(_a, ["language"]);
        return (0, errors_1.success)({
            data: newHome,
            message: 'Home created successfuly',
            success: true,
        });
    }
    async get() {
        const home = __rest(await this.homeRepository.findRegister({
            id: '1',
        }), []);
        return (0, errors_1.success)({
            data: home,
            message: 'Home found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedHome = __rest(data, ["id"]);
        const homeExists = await this.homeRepository.findRegister({
            id,
        });
        if (!homeExists) {
            return (0, errors_1.failure)({
                message: 'No home found',
                success: false,
            });
        }
        const _a = await this.homeRepository.save(Object.assign(Object.assign({}, homeExists), updatedHome)), { language } = _a, home = __rest(_a, ["language"]);
        return (0, errors_1.success)({
            data: home,
            message: 'Home updated successfully',
            success: true,
        });
    }
};
HomeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.HomeRepository])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map