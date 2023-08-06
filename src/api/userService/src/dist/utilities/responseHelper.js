"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultReject = exports.defaultResolve = void 0;
const errorHelper_1 = __importDefault(require("./errorHelper"));
const loggingHelper_1 = __importDefault(require("./loggingHelper"));
/**
 * @description Default error response for API requests
 * @param {Object} error - Error object
 * @param {*} response - Response object
 * @returns Reject Response with Error Object
 */
const defaultReject = (error, response) => __awaiter(void 0, void 0, void 0, function* () {
    const boomError = (0, errorHelper_1.default)({
        message: error.message,
        statusCode: error.code,
    }).payload;
    const errorResponse = Object.assign(Object.assign({}, boomError), { stackTrace: error.stack });
    response.status(boomError.statusCode).json(boomError);
    // only 500 errors are unknow error which needs to be reported
    // other errors are handled
    if (boomError.statusCode >= 500) {
        yield loggingHelper_1.default.log('error', errorResponse);
    }
});
exports.defaultReject = defaultReject;
/**
 * @description Default success response for API requests
 * @param {*} response - Response Object
 * @param {Object} data - Returned Data object
 * @returns Resolved Response with Data
 */
const defaultResolve = (response, data) => __awaiter(void 0, void 0, void 0, function* () {
    // destructure cacheKey from response
    const { cacheKey, flushCache } = data, payload = __rest(data, ["cacheKey", "flushCache"]);
    response.status(200).json({
        data: payload,
        status: 'success',
    });
    /* // updateCache
     if (cacheKey) {
       await updateCache(
         cacheKey,
         JSON.stringify({
           data: payload,
           status: 'success',
         }),
       );
     }
   
     if (flushCache) {
       // flush cache
       const result = await flushCacheDb();
       Logger.log('debug', `Cleared Cache: ${result.toString()}`);
     }*/
});
exports.defaultResolve = defaultResolve;
