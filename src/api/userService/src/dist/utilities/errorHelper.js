"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const boom_1 = __importDefault(require("@hapi/boom"));
/**
 * @description Wrapper method for error handling
 * @param {Object} error Error object {message: string, statusCode: number}
 * @param error.message Description of the error
 * @param error.statusCode HTTP Status Code of the Error
 * @returns {Object} Returns Boom Object
 */
const ErrorHelper = (error) => {
    switch (error.statusCode) {
        case 400:
            return boom_1.default.badRequest(error.message).output;
        case 401:
            return boom_1.default.unauthorized(error.message).output;
        case 403:
            return boom_1.default.forbidden(error.message).output;
        case 404:
            return boom_1.default.notFound(error.message).output;
        case 405:
            return boom_1.default.methodNotAllowed(error.message).output;
        case 406:
            return boom_1.default.notAcceptable(error.message).output;
        case 408:
            return boom_1.default.clientTimeout(error.message).output;
        case 409:
            return boom_1.default.conflict(error.message).output;
        case 414:
            return boom_1.default.uriTooLong(error.message).output;
        case 415:
            return boom_1.default.unsupportedMediaType(error.message).output;
        case 422:
            return boom_1.default.badData(error.message).output;
        case 429:
            return boom_1.default.tooManyRequests(error.message).output;
        default:
            return boom_1.default.badImplementation('Un known error').output;
    }
};
exports.default = ErrorHelper;
