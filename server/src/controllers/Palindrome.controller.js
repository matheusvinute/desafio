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
Object.defineProperty(exports, "__esModule", { value: true });
const palindrome_1 = require("../utils/palindrome");
class PalindromeController {
    static get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { first, last } = request.query;
            const palindromes = (0, palindrome_1.generatePalindromeNumbers)(first, last);
            return response.status(200).send(palindromes);
        });
    }
}
exports.default = PalindromeController;
