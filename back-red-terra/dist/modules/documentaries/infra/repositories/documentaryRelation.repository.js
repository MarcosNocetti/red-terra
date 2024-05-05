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
exports.DocumentaryRelationRepository = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("../../../../entities");
const typeorm_1 = require("typeorm");
let DocumentaryRelationRepository = class DocumentaryRelationRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = dataSource.getRepository(entities_1.DocumentaryRelationEntity);
    }
    async save(data) {
        return await this.repository.save(data);
    }
    async delete(id) {
        return (await this.repository.delete({ id })).raw;
    }
    async findRegister(whereConditions, selectConditions, otherConditions) {
        return await this.repository.findOne(Object.assign(Object.assign({ relations: [
                'documentaryEn',
                'documentaryBr',
                'documentaryEn.awards',
                'documentaryBr.awards',
            ] }, otherConditions), { select: Object.assign({}, selectConditions), where: whereConditions }));
    }
    async findRelation(id) {
        return await this.repository.findOne({
            relations: [
                'documentaryEn',
                'documentaryBr',
                'documentaryEn.awards',
                'documentaryBr.awards',
            ],
            where: [
                {
                    documentaryEnId: id,
                },
                {
                    documentaryBrId: id,
                },
            ],
        });
    }
    async findRegisters(whereConditions, selectConditions, otherConditions) {
        return await this.repository.find(Object.assign(Object.assign({ relations: [
                'documentaryEn',
                'documentaryBr',
                'documentaryEn.awards',
                'documentaryBr.awards',
            ] }, otherConditions), { select: Object.assign({}, selectConditions), where: whereConditions }));
    }
};
DocumentaryRelationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], DocumentaryRelationRepository);
exports.DocumentaryRelationRepository = DocumentaryRelationRepository;
//# sourceMappingURL=documentaryRelation.repository.js.map