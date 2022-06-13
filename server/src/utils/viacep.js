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
exports.consultCep = void 0;
const axios_1 = __importDefault(require("axios"));
function consultCep(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.data)
                throw { 'status': 500, 'message': 'cant send request' };
            if (response.status == 400)
                throw { 'status': 400, 'message': 'invalid cep' };
            if (!!response.data.erro)
                throw { 'status': 400, 'message': 'cep dont exists' };
            return {
                endereco: response.data.logradouro,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                estado: response.data.uf
            };
        }
        catch (error) {
            throw { 'status': 400, 'message': error };
        }
    });
}
exports.consultCep = consultCep;
