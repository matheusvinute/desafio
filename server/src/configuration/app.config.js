"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    'environment': process.env.ENV || 'development',
    'host': process.env.HOST || 'localhost',
    'port': process.env.PORT || 3003,
    'endpoint': process.env.ENDPOINT || '/api/v1'
};
