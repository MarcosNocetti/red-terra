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
exports.AwardsEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const documentaries_1 = require("../documentaries");
const whoWeAre_1 = require("../whoWeAre");
let AwardsEntity = class AwardsEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AwardsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], AwardsEntity.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'documentary_id', nullable: true }),
    __metadata("design:type", String)
], AwardsEntity.prototype, "documentaryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => documentaries_1.DocumentaryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'documentary_id', referencedColumnName: 'id' }),
    __metadata("design:type", documentaries_1.DocumentaryEntity)
], AwardsEntity.prototype, "documentary", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'who_we_are_id', nullable: true }),
    __metadata("design:type", String)
], AwardsEntity.prototype, "whoWeAreId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => whoWeAre_1.WhoWeAreEntity),
    (0, typeorm_1.JoinColumn)({ name: 'who_we_are_id', referencedColumnName: 'id' }),
    __metadata("design:type", whoWeAre_1.WhoWeAreEntity)
], AwardsEntity.prototype, "whoWeAre", void 0);
AwardsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_awards' })
], AwardsEntity);
exports.AwardsEntity = AwardsEntity;
//# sourceMappingURL=awards.entity.js.map