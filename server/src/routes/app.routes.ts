import { Router, Request, Response } from "express";
import PalindromeController from "../controllers/Palindrome.controller";
import CashController from "../controllers/Cash.controller";
import MotoController from "../controllers/Moto.controller";
import TourController from "../controllers/Tour.controller";
import CepController from "../controllers/Cep.controller";

function defaultRoute(request: Request, response: Response){
    response.send({
        'message': 'default API route'
    });
}

const routes = Router();
/**
 * Retorna uma lista de números palindromos gerados com 
 * base num determinado intervalo
 */
routes.get('/palindrome', PalindromeController.get);

/** 
 * Retorna uma um objeto com a quantidade de cada nota para o troco
 */
routes.get('/cash', CashController.get);

/* 
* Retorna um objeto JSON com todos os objetos da classe moto
*/
routes.get('/moto', MotoController.get)

/* 
* Cria um objeto da classe moto e salva em um arquivo JSON
*/
routes.post('/moto', MotoController.post)

/* 
* Retorna um objeto JSON com todos os objetos da classe passeio (tour)
*/
routes.get('/passeio', TourController.get)

/* 
* Cria um objeto da classe passeio (tour) e salva em um arquivo JSON
*/
routes.post('/passeio', TourController.post)

/* 
* Retorna um objeto JSON com todos os atributos do cep
*/
routes.get('/cep', CepController.get)

/*
* Rota default da API - teste
*/
routes.get('/', defaultRoute);

export default routes;