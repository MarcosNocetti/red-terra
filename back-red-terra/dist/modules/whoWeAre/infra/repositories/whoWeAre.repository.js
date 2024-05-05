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
exports.WhoWeAreRepository = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../../entities");
const typeorm_1 = require("typeorm");
let WhoWeAreRepository = class WhoWeAreRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = dataSource.getRepository(entities_1.WhoWeAreEntity);
    }
    async save(data) {
        return await this.repository.save(data);
    }
    async findRegister(whereConditions, selectConditions, otherConditions) {
        return await this.repository.findOne(Object.assign(Object.assign({}, otherConditions), { select: Object.assign({}, selectConditions), where: Object.assign({}, whereConditions) }));
    }
    async findRegisters(whereConditions, selectConditions, otherConditions) {
        return await this.repository.find(Object.assign(Object.assign({ relations: ['clientReviews', 'rdns', 'teamPeople'] }, otherConditions), { select: Object.assign({}, selectConditions), where: Object.assign({}, whereConditions) }));
    }
};
WhoWeAreRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], WhoWeAreRepository);
exports.WhoWeAreRepository = WhoWeAreRepository;
//# sourceMappingURL=whoWeAre.repository.js.map