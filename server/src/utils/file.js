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
exports.readFile = exports.saveFile = void 0;
const fs_1 = __importDefault(require("fs"));
function saveFile(data, archiveName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fileData = fs_1.default.readFileSync(archiveName, 'utf8') || '[]';
            const objectJson = JSON.parse(fileData);
            objectJson.push(data);
            fs_1.default.writeFileSync(archiveName, JSON.stringify(objectJson, null, 2));
        }
        catch (error) {
            return {
                'error': true,
                'message': 'failed to read file',
                'thrownError': error
            };
        }
        return {
            'error': false,
            'message': 'file saved'
        };
    });
}
exports.saveFile = saveFile;
function readFile(archiveName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fileData = fs_1.default.readFileSync(archiveName, 'utf8') || '[]';
            const objectJson = JSON.parse(fileData.toString());
            return {
                'data': objectJson
            };
        }
        catch (error) {
            return {
                'error': true,
                'message': 'failed to read file',
                'thrownError': error
            };
        }
    });
}
exports.readFile = readFile;
