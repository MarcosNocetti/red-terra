"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhoWeAreModule = void 0;
const common_1 = require("@nestjs/common");
const repositories_1 = require("./infra/repositories");
const controllers_1 = require("./interfaceAdapters/controllers");
const services_1 = require("./services");
let WhoWeAreModule = class WhoWeAreModule {
};
WhoWeAreModule = __decorate([
    (0, common_1.Module)({
        providers: [
            repositories_1.ClientReviewsRepository,
            services_1.ClientReviewsService,
            repositories_1.TeamPeopleRepository,
            services_1.TeamPeopleService,
            repositories_1.RdnRepository,
            services_1.RdnService,
            repositories_1.WhoWeAreRepository,
            services_1.WhoWeAreService,
        ],
        controllers: [
            controllers_1.ClientReviewController,
            controllers_1.TeamPeopleController,
            controllers_1.RdnController,
            controllers_1.WhoWeAreController,
        ],
    })
], WhoWeAreModule);
exports.WhoWeAreModule = WhoWeAreModule;
//# sourceMappingURL=whoWeAre.module.js.map