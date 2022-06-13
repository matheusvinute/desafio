"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_config_1 = __importDefault(require("./configuration/app.config"));
const app_routes_1 = __importDefault(require("./routes/app.routes"));
class ApplicationController {
    constructor() {
        this.application = (0, express_1.default)();
        this.application.use((0, cors_1.default)());
        this.application.use(express_1.default.json());
        this.routes();
    }
    listen(port, callback) {
        this.application.listen(port, callback);
    }
    routes() {
        this.application.use(app_config_1.default.endpoint, app_routes_1.default);
    }
}
exports.default = new ApplicationController();
