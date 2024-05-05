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
exports.WhoWeAreEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const headers_1 = require("../headers");
const _1 = require("./");
let WhoWeAreEntity = class WhoWeAreEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'banner_url', type: 'longtext' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "bannerUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "quote", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quote_author' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "quoteAuthor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'team_title' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "teamTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credit_title' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "creditTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'header_id' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "headerId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => headers_1.HeaderEntity),
    __metadata("design:type", headers_1.HeaderEntity)
], WhoWeAreEntity.prototype, "header", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.TeamPeopleEntity, (teamPeople) => teamPeople.whoWeAre),
    __metadata("design:type", Array)
], WhoWeAreEntity.prototype, "teamPeople", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rdn_title' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "rdnTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rdn_description' }),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "rdnDescription", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.RdnEntity, (rdn) => rdn.whoWeAre),
    __metadata("design:type", Array)
], WhoWeAreEntity.prototype, "rdns", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WhoWeAreEntity.prototype, "clientReviewTitle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ClientReviewEntity, (clientReview) => clientReview.whoWeAre),
    __metadata("design:type", Array)
], WhoWeAreEntity.prototype, "clientReviews", void 0);
WhoWeAreEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_who_we_are' })
], WhoWeAreEntity);
exports.WhoWeAreEntity = WhoWeAreEntity;
//# sourceMappingURL=whoWeAre.entity.js.map