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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("../utils/file");
const path_1 = __importDefault(require("path"));
const Tour_1 = __importDefault(require("../models/Tour"));
const filePath = path_1.default.resolve(__dirname, '../../../', 'database', 'tour.json');
class TourController {
    static get(request, response) {
        (() => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, file_1.readFile)(filePath);
            if (!!data.error)
                return response.status(500).send(data);
            else
                return response.status(200).send(data);
        }))();
    }
    static post(request, response) {
        const { atributes } = request.body;
        const tourObject = new Tour_1.default(atributes);
        if (!!tourObject) {
            (() => __awaiter(this, void 0, void 0, function* () {
                const message = yield (0, file_1.saveFile)(tourObject.toObject(), filePath);
                if (message.error == true)
                    return response.status(500).send(message);
                else
                    return response.status(200).send(message);
            }))();
        }
        else
            return response.status(400).send({
                'error': true,
                'message': 'missing object atributes'
            });
    }
}
exports.default = TourController;
