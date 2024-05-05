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
exports.NewsEntity = void 0;
const entities_1 = require("..");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
let NewsEntity = class NewsEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'longtext' }),
    __metadata("design:type", String)
], NewsEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NewsEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'month_year', nullable: true }),
    __metadata("design:type", String)
], NewsEntity.prototype, "monthYear", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], NewsEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NewsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'background_color', nullable: true }),
    __metadata("design:type", String)
], NewsEntity.prototype, "backgroundColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'text_color', nullable: true }),
    __metadata("design:type", String)
], NewsEntity.prototype, "textColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_red_carta', default: false }),
    __metadata("design:type", Boolean)
], NewsEntity.prototype, "isRedCarta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'link_url' }),
    __metadata("design:type", String)
], NewsEntity.prototype, "linkUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'whats_happening_id', nullable: true }),
    __metadata("design:type", String)
], NewsEntity.prototype, "whatsHappeningId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.WhatsHappeningEntity),
    (0, typeorm_1.JoinColumn)({ name: 'whats_happening_id', referencedColumnName: 'id' }),
    __metadata("design:type", entities_1.WhatsHappeningEntity)
], NewsEntity.prototype, "whatsHappening", void 0);
NewsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_news' })
], NewsEntity);
exports.NewsEntity = NewsEntity;
//# sourceMappingURL=news.entity.js.map