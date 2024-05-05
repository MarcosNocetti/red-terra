"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseIntereceptor = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const operators_1 = require("rxjs/operators");
let ResponseIntereceptor = class ResponseIntereceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            var _a, _b;
            const response = context.switchToHttp().getResponse();
            response.statusCode = data.statusCode;
            response.statusMessage = common_1.HttpStatus[data.statusCode]
                .split('_')
                .join(' ');
            response.status(data.statusCode);
            if (((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.refresh) && ((_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.token)) {
                response.cookie('refresh', data.data.refresh, {
                    secure: process.env.NODE_ENV !== 'development',
                    httpOnly: true,
                    expires: (0, date_fns_1.addWeeks)(new Date(), 1),
                });
                response.cookie('token', data.data.token, {
                    secure: process.env.NODE_ENV !== 'development',
                    httpOnly: true,
                    expires: (0, date_fns_1.addMinutes)(new Date(), 5),
                });
                data = data.data.user;
            }
            return data;
        }));
    }
};
ResponseIntereceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseIntereceptor);
exports.ResponseIntereceptor = ResponseIntereceptor;
//# sourceMappingURL=responseInterceptor.js.map