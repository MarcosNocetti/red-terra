"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDS = exports.DataSourceConfig = void 0;
require("dotenv/config");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
config_1.ConfigModule.forRoot({
    envFilePath: `.env.development`,
});
const configService = new config_1.ConfigService();
exports.DataSourceConfig = {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    database: configService.get('DB_DATABASE'),
    entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    synchronize: true,
    migrationsRun: true,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.AppDS = new typeorm_1.DataSource(exports.DataSourceConfig);
//# sourceMappingURL=data.source.js.map