"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Palindrome_controller_1 = __importDefault(require("../controllers/Palindrome.controller"));
const Cash_controller_1 = __importDefault(require("../controllers/Cash.controller"));
const Moto_controller_1 = __importDefault(require("../controllers/Moto.controller"));
const Tour_controller_1 = __importDefault(require("../controllers/Tour.controller"));
const Cep_controller_1 = __importDefault(require("../controllers/Cep.controller"));
function defaultRoute(request, response) {
    response.send({
        'message': 'default API route'
    });
}
const routes = (0, express_1.Router)();
/**
 * Retorna uma lista de números palindromos gerados com
 * base num determinado intervalo
 */
routes.get('/palindrome', Palindrome_controller_1.default.get);
/**
 * Retorna uma um objeto com a quantidade de cada nota para o troco
 */
routes.get('/cash', Cash_controller_1.default.get);
/*
* Retorna um objeto JSON com todos os objetos da classe moto
*/
routes.get('/moto', Moto_controller_1.default.get);
/*
* Cria um objeto da classe moto e salva em um arquivo JSON
*/
routes.post('/moto', Moto_controller_1.default.post);
/*
* Retorna um objeto JSON com todos os objetos da classe passeio (tour)
*/
routes.get('/passeio', Tour_controller_1.default.get);
/*
* Cria um objeto da classe passeio (tour) e salva em um arquivo JSON
*/
routes.post('/passeio', Tour_controller_1.default.post);
/*
* Retorna um objeto JSON com todos os atributos do cep
*/
routes.get('/cep', Cep_controller_1.default.get);
/*
* Rota default da API - teste
*/
routes.get('/', defaultRoute);
exports.default = routes;
