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
exports.WhatsHappeningEntity = void 0;
const entities_1 = require("..");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
let WhatsHappeningEntity = class WhatsHappeningEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'banner_url', type: 'longtext' }),
    __metadata("design:type", String)
], WhatsHappeningEntity.prototype, "bannerUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WhatsHappeningEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WhatsHappeningEntity.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => entities_1.NewsEntity, (news) => news.whatsHappening),
    __metadata("design:type", Array)
], WhatsHappeningEntity.prototype, "news", void 0);
WhatsHappeningEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_whats_happenings' })
], WhatsHappeningEntity);
exports.WhatsHappeningEntity = WhatsHappeningEntity;
//# sourceMappingURL=whatsHappening.entity.js.map