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
exports.FooterEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const _1 = require("./");
let FooterEntity = class FooterEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FooterEntity.prototype, "copyright", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.FooterLinkEntity, (footerLink) => footerLink.footer),
    __metadata("design:type", Array)
], FooterEntity.prototype, "links", void 0);
FooterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_footers' })
], FooterEntity);
exports.FooterEntity = FooterEntity;
//# sourceMappingURL=footer.entity.js.map