"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flushCacheDb = exports.getFromCache = exports.updateCache = void 0;
const redis_1 = __importDefault(require("redis"));
const redisClient = redis_1.default.createClient({
    host: process.env.REDIS_HOST,
    port: 6379,
});
/**
 * @description Update redis cache
 * @param {string} key key of the data
 * @param {string} value cache value
 * @param {number} ttl expire in seconds
 * @returns void
 */
const updateCache = (key, value, ttl = 3600) => {
    redisClient.setex(key, ttl, value);
};
exports.updateCache = updateCache;
/**
 * @description Fetch cache value
 * @param key key of the data
 * @returns {string} cached content
 */
const getFromCache = (key) => new Promise((resolve, reject) => {
    redisClient.get(key, (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    });
});
exports.getFromCache = getFromCache;
/**
 * @description Flush cache after updates
 * @returns {void}
 */
const flushCacheDb = () => new Promise((resolve, reject) => {
    redisClient.flushdb((err, succeeded) => {
        if (err) {
            reject(err);
        }
        resolve(succeeded);
    });
});
exports.flushCacheDb = flushCacheDb;
