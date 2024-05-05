"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersModule = void 0;
const common_1 = require("@nestjs/common");
const headers_service_1 = require("./services/headers.service");
const headers_controller_1 = require("./interfaceAdapters/controllers/headers.controller");
const repositories_1 = require("./infra/repositories");
let HeadersModule = class HeadersModule {
};
HeadersModule = __decorate([
    (0, common_1.Module)({
        providers: [headers_service_1.HeadersService, repositories_1.HeaderRepository, repositories_1.HeaderLinkRepository],
        controllers: [headers_controller_1.HeadersController],
    })
], HeadersModule);
exports.HeadersModule = HeadersModule;
//# sourceMappingURL=headers.module.js.map