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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRelationEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const news_entity_1 = require("./news.entity");
let NewsRelationEntity = class NewsRelationEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'news_en_id', nullable: true }),
    __metadata("design:type", String)
], NewsRelationEntity.prototype, "newsEnId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => news_entity_1.NewsEntity),
    (0, typeorm_1.JoinColumn)({ name: 'news_en_id', referencedColumnName: 'id' }),
    __metadata("design:type", news_entity_1.NewsEntity)
], NewsRelationEntity.prototype, "newsEn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'news_br_id', nullable: true }),
    __metadata("design:type", String)
], NewsRelationEntity.prototype, "newsBrId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => news_entity_1.NewsEntity),
    (0, typeorm_1.JoinColumn)({ name: 'news_br_id', referencedColumnName: 'id' }),
    __metadata("design:type", news_entity_1.NewsEntity)
], NewsRelationEntity.prototype, "newsBr", void 0);
NewsRelationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_news_relation' })
], NewsRelationEntity);
exports.NewsRelationEntity = NewsRelationEntity;
//# sourceMappingURL=newsRelation.entity.js.map