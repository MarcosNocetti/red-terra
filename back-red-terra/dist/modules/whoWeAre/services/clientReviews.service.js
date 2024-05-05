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
exports.ClientReviewsService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
let ClientReviewsService = class ClientReviewsService {
    constructor(clientReviewsRepository) {
        this.clientReviewsRepository = clientReviewsRepository;
    }
    async create(data) {
        const { language } = data, clientReviews = __rest(data, ["language"]);
        const newClientReview = await this.clientReviewsRepository.save(Object.assign(Object.assign({}, clientReviews), { language }));
        return (0, errors_1.success)({
            data: newClientReview,
            message: 'Client review created successfuly',
            success: true,
        });
    }
    async delete(clientReviewId) {
        if (!(clientReviewId === null || clientReviewId === void 0 ? void 0 : clientReviewId.length)) {
            return (0, errors_1.failure)({
                data: 'Client review id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.clientReviewsRepository.findRegister({ id: clientReviewId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${clientReviewId} does not exist`,
                success: false,
            });
        }
        const deletedId = await this.clientReviewsRepository.delete(clientReviewId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'Client review deleted successfuly',
            success: true,
        });
    }
    async get() {
        const clientReviews = await this.clientReviewsRepository.findRegisters();
        if (!clientReviews) {
            return (0, errors_1.failure)({
                message: 'No clientReviews found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: clientReviews,
            message: 'Client review found successfully',
            success: true,
        });
    }
    async getByWhatWeDo(id) {
        const clientReviews = await this.clientReviewsRepository.findRegister({
            id,
        });
        if (!clientReviews) {
            return (0, errors_1.failure)({
                message: 'No clientReviews found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: clientReviews,
            message: 'Client review found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id } = data, updatedClientReview = __rest(data, ["id"]);
        const clientReviewsExists = await this.clientReviewsRepository.findRegister({
            id,
        });
        if (!clientReviewsExists) {
            return (0, errors_1.failure)({
                message: 'No clientReviews found',
                success: false,
            });
        }
        const clientReviews = await this.clientReviewsRepository.save(Object.assign(Object.assign({}, clientReviewsExists), updatedClientReview));
        return (0, errors_1.success)({
            data: clientReviews,
            message: 'Client review updated successfully',
            success: true,
        });
    }
};
ClientReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.ClientReviewsRepository])
], ClientReviewsService);
exports.ClientReviewsService = ClientReviewsService;
//# sourceMappingURL=clientReviews.service.js.map