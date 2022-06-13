import { Request, Response } from 'express';
import { cashAmount } from '../utils/cash'

export default class CashController {

    static async get(request: Request, response: Response) {
        const { purchase, payment } = request.query;
        const notes = cashAmount(purchase, payment);
        if(notes.error) return response.status(400).send(notes);
        return response.status(200).send(notes);
    }
}