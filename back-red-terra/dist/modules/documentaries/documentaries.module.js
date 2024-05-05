"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentaryModule = void 0;
const common_1 = require("@nestjs/common");
const documentary_service_1 = require("./services/documentary.service");
const documentary_controller_1 = require("./interfaceAdapters/controllers/documentary.controller");
const repositories_1 = require("./infra/repositories");
const documentaryRelation_repository_1 = require("./infra/repositories/documentaryRelation.repository");
let DocumentaryModule = class DocumentaryModule {
};
DocumentaryModule = __decorate([
    (0, common_1.Module)({
        providers: [documentary_service_1.DocumentaryService, repositories_1.DocumentaryRepository, documentaryRelation_repository_1.DocumentaryRelationRepository],
        controllers: [documentary_controller_1.DocumentaryController],
    })
], DocumentaryModule);
exports.DocumentaryModule = DocumentaryModule;
//# sourceMappingURL=documentaries.module.js.map