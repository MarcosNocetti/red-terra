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
exports.ValidationInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
const exceptions_1 = require("../exceptions");
let ValidationInterceptor = class ValidationInterceptor {
    constructor(type) {
        this.type = type;
    }
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(this.type, req.body)).then((errors) => {
            if (errors === null || errors === void 0 ? void 0 : errors.length) {
                const message = errors
                    .map((error) => {
                    return (error === null || error === void 0 ? void 0 : error.constraints)
                        ? Object.values(error.constraints)
                        : (error === null || error === void 0 ? void 0 : error.children) && this.verifyChildrenErrors(error);
                })
                    .join(', ');
                return new exceptions_1.HttpException(common_1.HttpStatus['NOT_ACCEPTABLE'], message, false);
            }
        });
        return next.handle().pipe((0, rxjs_1.tap)(() => console.log(`validated`)));
    }
    verifyChildrenErrors(childrenErrors) {
        let error = (childrenErrors === null || childrenErrors === void 0 ? void 0 : childrenErrors.children.length) && Array.isArray(childrenErrors.value)
            ? `${childrenErrors.property
                .charAt(0)
                .toUpperCase()}${childrenErrors.property.slice(1)}: `
            : '';
        error += childrenErrors.children
            .map((childError) => (childError === null || childError === void 0 ? void 0 : childError.constraints)
            ? Object.values(childError.constraints)
            : (childError === null || childError === void 0 ? void 0 : childError.children) && this.verifyChildrenErrors(childError))
            .join(', ');
        return error;
    }
};
ValidationInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ValidationInterceptor);
exports.ValidationInterceptor = ValidationInterceptor;
//# sourceMappingURL=dataValidation.js.map