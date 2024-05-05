"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsHappeningModule = void 0;
const common_1 = require("@nestjs/common");
const whatsHappening_service_1 = require("./services/whatsHappening.service");
const whatsHappening_controller_1 = require("./interfaceAdapters/controllers/whatsHappening.controller");
const repositories_1 = require("./infra/repositories");
const controllers_1 = require("./interfaceAdapters/controllers");
const services_1 = require("./services");
const newsRelation_repository_1 = require("./infra/repositories/newsRelation.repository");
let WhatsHappeningModule = class WhatsHappeningModule {
};
WhatsHappeningModule = __decorate([
    (0, common_1.Module)({
        providers: [
            whatsHappening_service_1.WhatsHappeningService,
            repositories_1.WhatsHappeningRepository,
            services_1.NewsService,
            repositories_1.NewsRepository,
            newsRelation_repository_1.NewsRelationRepository,
        ],
        controllers: [whatsHappening_controller_1.WhatsHappeningController, controllers_1.NewsController],
    })
], WhatsHappeningModule);
exports.WhatsHappeningModule = WhatsHappeningModule;
//# sourceMappingURL=whatsHappening.module.js.map