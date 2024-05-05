"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const errors_1 = require("./shared/errors");
const interceptors_1 = require("./shared/interceptors");
const session = require("express-session");
const passport = require("passport");
const express_1 = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: false,
    });
    app.enableCors();
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((0, express_1.json)({ limit: '5mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '5mb' }));
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.useGlobalFilters(new errors_1.AllExceptionsFilter());
    app.useGlobalInterceptors(new interceptors_1.ResponseIntereceptor());
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map