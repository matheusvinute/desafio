"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app_config_1 = __importDefault(require("./configuration/app.config"));
app_1.default.listen(app_config_1.default.port, () => {
    console.log(`server listening on http://${app_config_1.default.host}:${app_config_1.default.port}${app_config_1.default.endpoint}...`);
});
