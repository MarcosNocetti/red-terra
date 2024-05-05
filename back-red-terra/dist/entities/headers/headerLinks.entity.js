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
exports.HeaderLinkEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const _1 = require("./");
let HeaderLinkEntity = class HeaderLinkEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HeaderLinkEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'header_id' }),
    __metadata("design:type", String)
], HeaderLinkEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.HeaderEntity),
    (0, typeorm_1.JoinColumn)({ name: 'header_id', referencedColumnName: 'id' }),
    __metadata("design:type", _1.HeaderEntity)
], HeaderLinkEntity.prototype, "header", void 0);
HeaderLinkEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_header_links' })
], HeaderLinkEntity);
exports.HeaderLinkEntity = HeaderLinkEntity;
//# sourceMappingURL=headerLinks.entity.js.map