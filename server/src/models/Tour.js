"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tour {
    constructor(atributes) {
        this.model = atributes.model;
        this.yearOfManofacture = atributes.yearOfManofacture;
        this.doorQuantitie = 4;
        this.brand = atributes.brand;
        this.text = atributes.text;
        if (!this.model || !this.yearOfManofacture || !this.brand)
            throw 'your request is missing some parameters';
    }
    toObject() {
        return {
            'model': this.model,
            'yearOfManofacture': this.yearOfManofacture,
            'doorQuantitie': this.doorQuantitie,
            'brand': this.brand
        };
    }
}
exports.default = Tour;
