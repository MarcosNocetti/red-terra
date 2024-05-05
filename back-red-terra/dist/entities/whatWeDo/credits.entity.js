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
exports.CreditEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const _1 = require("./");
let CreditEntity = class CreditEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreditEntity.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CreditEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'what_we_do_id', nullable: true }),
    __metadata("design:type", String)
], CreditEntity.prototype, "whatWeDoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.WhatWeDoEntity),
    (0, typeorm_1.JoinColumn)({ name: 'what_we_do_id', referencedColumnName: 'id' }),
    __metadata("design:type", _1.WhatWeDoEntity)
], CreditEntity.prototype, "whatWeDo", void 0);
CreditEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_credits' })
], CreditEntity);
exports.CreditEntity = CreditEntity;
//# sourceMappingURL=credits.entity.js.map