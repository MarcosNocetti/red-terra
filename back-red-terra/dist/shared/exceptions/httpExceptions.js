"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(status, message, success) {
        super(message);
        this.statusCode = status;
        this.message = message;
        this.success = success;
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=httpExceptions.js.map