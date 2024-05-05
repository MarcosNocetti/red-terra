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
exports.DocumentaryEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const awards_1 = require("../awards");
const whatWeDo_1 = require("../whatWeDo");
let DocumentaryEntity = class DocumentaryEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'video_url' }),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "videoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'longtext' }),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "sinopse", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sinopse_url' }),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "sinopseUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sinopse_url_label' }),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "sinopseUrlLabel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "availability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], DocumentaryEntity.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'what_we_do_id' }),
    __metadata("design:type", String)
], DocumentaryEntity.prototype, "whatWeDoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => whatWeDo_1.WhatWeDoEntity),
    (0, typeorm_1.JoinColumn)({ name: 'what_we_do_id', referencedColumnName: 'id' }),
    __metadata("design:type", whatWeDo_1.WhatWeDoEntity)
], DocumentaryEntity.prototype, "whatWeDo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => awards_1.AwardsEntity, (awards) => awards.documentary),
    __metadata("design:type", Array)
], DocumentaryEntity.prototype, "awards", void 0);
DocumentaryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_documentaries' })
], DocumentaryEntity);
exports.DocumentaryEntity = DocumentaryEntity;
//# sourceMappingURL=documentaries.entity.js.map