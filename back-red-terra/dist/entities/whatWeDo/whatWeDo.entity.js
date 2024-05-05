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
exports.WhatWeDoEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const _1 = require("./");
const documentaries_1 = require("../documentaries");
let WhatWeDoEntity = class WhatWeDoEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'banner_url', type: 'longtext' }),
    __metadata("design:type", String)
], WhatWeDoEntity.prototype, "bannerUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WhatWeDoEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], WhatWeDoEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.CreditEntity, (credit) => credit.whatWeDo),
    __metadata("design:type", Array)
], WhatWeDoEntity.prototype, "credits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => documentaries_1.DocumentaryEntity, (documentary) => documentary.whatWeDo),
    __metadata("design:type", Array)
], WhatWeDoEntity.prototype, "documentaries", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credit_title' }),
    __metadata("design:type", String)
], WhatWeDoEntity.prototype, "creditTitle", void 0);
WhatWeDoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_what_we_do' })
], WhatWeDoEntity);
exports.WhatWeDoEntity = WhatWeDoEntity;
//# sourceMappingURL=whatWeDo.entity.js.map