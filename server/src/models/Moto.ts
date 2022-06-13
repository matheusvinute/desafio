interface MotoInterface {
    model: string
    passengers: number
    readonly wheelNumber: number
}

export default class Moto implements MotoInterface {
    model: string;
    passengers: number;
    wheelNumber: number;

    constructor(atributes: MotoInterface) {
        this.model = atributes.model;
        this.passengers = atributes.passengers;
        this.wheelNumber = 2;

        this.throwMissingParamsError();
        this.throwInvalidParamsError();
    }

    public throwMissingParamsError() {
        if (!this.model || !this.passengers)
            throw {
                'error': 'missing params',
                'message': 'your request is missing some parameters'
            };
    }

    public throwInvalidParamsError() {
        const isValid = this.passengers > 2 || this.passengers < 1 ? false : true;
        if (!isValid)
            throw {
                'error': 'invalid params',
                'message': 'your request has invalid parameters'
            };
    }

    public toObject(){
        return{
            'model': this.model,
            'passengers': this.passengers,
            'wheelnumber': this.wheelNumber
        }
    }
}