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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../shared/errors");
const repositories_1 = require("../infra/repositories");
const newsRelation_repository_1 = require("../infra/repositories/newsRelation.repository");
let NewsService = class NewsService {
    constructor(newsRepository, newsRelationRepository) {
        this.newsRepository = newsRepository;
        this.newsRelationRepository = newsRelationRepository;
    }
    async create(data) {
        const { language, relationId } = data, news = __rest(data, ["language", "relationId"]);
        if (news.isRedCarta && !news.monthYear) {
            return (0, errors_1.failure)({
                data: 'Red Carta month year',
                message: 'Must pass an month year',
                success: false,
            });
        }
        if (relationId &&
            !(await this.newsRepository.findRegister({ id: relationId }))) {
            return (0, errors_1.failure)({
                data: `News ${relationId} does not exists`,
                message: `News ${relationId} does not exists`,
                success: false,
            });
        }
        const newNews = await this.newsRepository.save(Object.assign(Object.assign({}, news), { language }));
        if (relationId === null || relationId === void 0 ? void 0 : relationId.length) {
            this.newsRelationRepository.save({
                newsBrId: language === 'br' ? newNews.id : relationId,
                newsEnId: language === 'en' ? newNews.id : relationId,
            });
        }
        else {
            this.newsRelationRepository.save({
                [language === 'br' ? 'newsBrId' : 'newsEnId']: newNews.id,
            });
        }
        return (0, errors_1.success)({
            data: newNews,
            message: 'News created successfuly',
            success: true,
        });
    }
    async delete(newsId) {
        if (!(newsId === null || newsId === void 0 ? void 0 : newsId.length)) {
            return (0, errors_1.failure)({
                data: 'News id',
                message: 'Must pass an id',
                success: false,
            });
        }
        if (!(await this.newsRepository.findRegister({ id: newsId }))) {
            return (0, errors_1.failure)({
                data: 'Does not exist id',
                message: `ID: ${newsId} does not exist`,
                success: false,
            });
        }
        const relation = await this.newsRelationRepository.findRegister([
            { newsEnId: newsId },
            { newsBrId: newsId },
        ]);
        if (relation) {
            await this.newsRelationRepository.delete(relation.id);
        }
        const deletedId = await this.newsRepository.delete(newsId);
        return (0, errors_1.success)({
            data: deletedId,
            message: 'News deleted successfuly',
            success: true,
        });
    }
    async get() {
        const news = await this.newsRepository.findRegisters();
        if (!news) {
            return (0, errors_1.failure)({
                message: 'No news found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: news,
            message: 'News found successfully',
            success: true,
        });
    }
    async getByWhatsHappening(whatsHappeningId) {
        const news = await this.newsRepository.findRegister({
            whatsHappeningId,
        });
        if (!news) {
            return (0, errors_1.failure)({
                message: 'No news found',
                success: false,
            });
        }
        return (0, errors_1.success)({
            data: news,
            message: 'News found successfully',
            success: true,
        });
    }
    async update(data) {
        const { id, relationId, language } = data, updatedNews = __rest(data, ["id", "relationId", "language"]);
        const newsExists = await this.newsRepository.findRegister({
            id,
        });
        if (!newsExists) {
            return (0, errors_1.failure)({
                message: 'No news found',
                success: false,
            });
        }
        const relation = await this.newsRelationRepository.findRegister({
            [language === 'br' ? 'newsBrId' : 'newsEnId']: id,
        });
        if (relationId !== undefined && (relationId === null || relationId === void 0 ? void 0 : relationId.length)) {
            if (!(await this.newsRelationRepository.findRegister([
                { newsBrId: relationId },
                { newsEnId: relationId },
            ]))) {
                this.newsRelationRepository.save({
                    newsBrId: language === 'br' ? id : relationId,
                    newsEnId: language === 'en' ? id : relationId,
                });
            }
            else if (!(await this.newsRepository.findRegister({ id: relationId }))) {
                return (0, errors_1.failure)({
                    data: `News relation does not exists`,
                    message: `News relation does not exists`,
                    success: false,
                });
            }
        }
        else if (relation) {
            await this.newsRelationRepository.save({
                id: relation.id,
                [language === 'br' ? 'newsBrId' : 'newsEnId']: id,
                [language !== 'br' ? 'newsBrId' : 'newsEnId']: null,
            });
        }
        else {
            await this.newsRelationRepository.save({
                [language === 'br' ? 'newsBrId' : 'newsEnId']: id,
                [language !== 'br' ? 'newsBrId' : 'newsEnId']: null,
            });
        }
        const news = await this.newsRepository.save(Object.assign(Object.assign({}, newsExists), updatedNews));
        return (0, errors_1.success)({
            data: news,
            message: 'News updated successfully',
            success: true,
        });
    }
};
NewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.NewsRepository,
        newsRelation_repository_1.NewsRelationRepository])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map