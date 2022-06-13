"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Moto {
    constructor(atributes) {
        this.model = atributes.model;
        this.passengers = atributes.passengers;
        this.wheelNumber = 2;
        this.throwMissingParamsError();
        this.throwInvalidParamsError();
    }
    throwMissingParamsError() {
        if (!this.model || !this.passengers)
            throw {
                'error': 'missing params',
                'message': 'your request is missing some parameters'
            };
    }
    throwInvalidParamsError() {
        const isValid = this.passengers > 2 || this.passengers < 1 ? false : true;
        if (!isValid)
            throw {
                'error': 'invalid params',
                'message': 'your request has invalid parameters'
            };
    }
    toObject() {
        return {
            'model': this.model,
            'passengers': this.passengers,
            'wheelnumber': this.wheelNumber
        };
    }
}
exports.default = Moto;
