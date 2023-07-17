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
Object.defineProperty(exports, "__esModule", { value: true });
const responseHelper_1 = require("./utilities/responseHelper");
const controller = (req, res, params) => __awaiter(void 0, void 0, void 0, function* () {
    // If there is no special responses to give, it will use the default response and reject
    const resolve = params.resolve ? params.resolve : responseHelper_1.defaultResolve;
    const reject = params.reject ? params.reject : responseHelper_1.defaultReject;
    try {
        // request parameter validation
        const attributes = yield params.validator(req);
        // call the service function with validated data
        const data = yield params.service(attributes, {});
        return resolve(res, data);
    }
    catch (err) {
        return reject(err, res);
    }
});
exports.default = controller;
