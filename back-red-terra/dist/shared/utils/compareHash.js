"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = void 0;
const bcrypt = require("bcrypt");
function compareHash(value, hash) {
    return bcrypt.compareSync(value, hash);
}
exports.compareHash = compareHash;
//# sourceMappingURL=compareHash.js.map