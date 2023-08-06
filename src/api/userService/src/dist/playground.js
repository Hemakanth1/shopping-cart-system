"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorObj = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const errorObj = boom_1.default.notFound('Resource not found');
exports.errorObj = errorObj;
