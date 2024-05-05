"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
const bcrypt = require("bcrypt");
function encrypt(value) {
    return bcrypt.hashSync(value, 10);
}
exports.encrypt = encrypt;
//# sourceMappingURL=encrypt.js.map