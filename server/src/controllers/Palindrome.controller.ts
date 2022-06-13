import { Request, Response } from 'express';
import { generatePalindromeNumbers } from '../utils/palindrome'

export default class PalindromeController {

    static async get(request: Request, response: Response) {
        const { first, last } = request.query;
        const palindromes = generatePalindromeNumbers(first, last);
        return response.status(200).send(palindromes);
    }
}