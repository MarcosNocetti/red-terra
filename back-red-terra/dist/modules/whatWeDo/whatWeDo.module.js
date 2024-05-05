"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatWeDoModule = void 0;
const common_1 = require("@nestjs/common");
const whatWeDo_service_1 = require("./services/whatWeDo.service");
const whatWeDo_controller_1 = require("./interfaceAdapters/controllers/whatWeDo.controller");
const repositories_1 = require("./infra/repositories");
const controllers_1 = require("./interfaceAdapters/controllers");
const services_1 = require("./services");
let WhatWeDoModule = class WhatWeDoModule {
};
WhatWeDoModule = __decorate([
    (0, common_1.Module)({
        providers: [
            whatWeDo_service_1.WhatWeDoService,
            repositories_1.WhatWeDoRepository,
            services_1.CreditsService,
            repositories_1.CreditsRepository,
        ],
        controllers: [whatWeDo_controller_1.WhatWeDoController, controllers_1.CreditsController],
    })
], WhatWeDoModule);
exports.WhatWeDoModule = WhatWeDoModule;
//# sourceMappingURL=whatWeDo.module.js.map