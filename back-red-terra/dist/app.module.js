"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("./config/data.source");
const headers_module_1 = require("./modules/headers/headers.module");
const users_module_1 = require("./modules/users/users.module");
const jwt_1 = require("@nestjs/jwt");
const footer_module_1 = require("./modules/footer/footer.module");
const home_module_1 = require("./modules/home/home.module");
const contact_module_1 = require("./modules/contact/contact.module");
const awards_module_1 = require("./modules/awards/awards.module");
const whatWeDo_module_1 = require("./modules/whatWeDo/whatWeDo.module");
const whoWeAre_module_1 = require("./modules/whoWeAre/whoWeAre.module");
const whatsHappening_module_1 = require("./modules/whatsHappening/whatsHappening.module");
const documentaries_module_1 = require("./modules/documentaries/documentaries.module");
const health_module_1 = require("./modules/healthCheck/health.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env`,
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot(Object.assign({}, data_source_1.DataSourceConfig)),
            headers_module_1.HeadersModule,
            users_module_1.UsersModule,
            footer_module_1.FooterModule,
            home_module_1.HomeModule,
            contact_module_1.ContactModule,
            awards_module_1.AwardsModule,
            whatWeDo_module_1.WhatWeDoModule,
            whoWeAre_module_1.WhoWeAreModule,
            whatsHappening_module_1.WhatsHappeningModule,
            documentaries_module_1.DocumentaryModule,
            jwt_1.JwtModule,
            health_module_1.HealthModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map