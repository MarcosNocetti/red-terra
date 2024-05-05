"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.failure = exports.Success = exports.Failure = void 0;
class Failure {
    constructor(value) {
        this.value = value;
    }
    isFailure() {
        return true;
    }
    isSuccess() {
        return false;
    }
}
exports.Failure = Failure;
class Success {
    constructor(value) {
        this.value = value;
    }
    isFailure() {
        return false;
    }
    isSuccess() {
        return true;
    }
}
exports.Success = Success;
const failure = (error) => {
    return new Failure(error);
};
exports.failure = failure;
const success = (value) => {
    return new Success(value);
};
exports.success = success;
//# sourceMappingURL=either.js.map