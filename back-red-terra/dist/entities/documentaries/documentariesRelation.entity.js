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
exports.DocumentaryRelationEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const documentaries_entity_1 = require("./documentaries.entity");
let DocumentaryRelationEntity = class DocumentaryRelationEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'documentary_en_id', nullable: true }),
    __metadata("design:type", String)
], DocumentaryRelationEntity.prototype, "documentaryEnId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => documentaries_entity_1.DocumentaryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'documentary_en_id', referencedColumnName: 'id' }),
    __metadata("design:type", documentaries_entity_1.DocumentaryEntity)
], DocumentaryRelationEntity.prototype, "documentaryEn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'documentary_br_id', nullable: true }),
    __metadata("design:type", String)
], DocumentaryRelationEntity.prototype, "documentaryBrId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => documentaries_entity_1.DocumentaryEntity),
    (0, typeorm_1.JoinColumn)({ name: 'documentary_br_id', referencedColumnName: 'id' }),
    __metadata("design:type", documentaries_entity_1.DocumentaryEntity)
], DocumentaryRelationEntity.prototype, "documentaryBr", void 0);
DocumentaryRelationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_documentaries_relation' })
], DocumentaryRelationEntity);
exports.DocumentaryRelationEntity = DocumentaryRelationEntity;
//# sourceMappingURL=documentariesRelation.entity.js.map