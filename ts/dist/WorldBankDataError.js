"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldBankDataError = void 0;
class WorldBankDataError extends Error {
    isWorldBankDataError = true;
    sdk = 'WorldBankData';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WorldBankDataError = WorldBankDataError;
//# sourceMappingURL=WorldBankDataError.js.map