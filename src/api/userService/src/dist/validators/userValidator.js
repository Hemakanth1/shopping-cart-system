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
const fetchAllUsers = (req) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { page, limit, sortBy } = req.query;
    //   const cacheKey:string = encodeURIComponent(
    //     `${req.url}-${JSON.stringify(req.query)}-${JSON.stringify(req.params)}`,
    //   );
    //   const attributes = {
    //     cacheKey,
    //     page: page ? parseInt(page.toString(), 10) : null,
    //     limit: limit ? parseInt(limit.toString(), 10) : null,
    //     sortBy: sortBy || null,
    //   };
    return validate();
});
const validate = () => {
    return true;
};
exports.default = { fetchAllUsers };
