import VehicleInterface from "./Vehicle";

export default class Tour implements VehicleInterface{
    model: string;    
    yearOfManofacture: string;
    doorQuantitie: number;
    brand: string;
    text?: string | {};

    constructor(atributes: VehicleInterface){
        this.model = atributes.model;
        this.yearOfManofacture = atributes.yearOfManofacture;
        this.doorQuantitie = 4;
        this.brand = atributes.brand;
        this.text = atributes.text;

        if(!this.model || !this.yearOfManofacture || !this.brand)
            throw 'your request is missing some parameters';
    }

    public toObject(){
        return{
            'model': this.model,
            'yearOfManofacture': this.yearOfManofacture,
            'doorQuantitie': this.doorQuantitie,
            'brand': this.brand
        }
    }
}