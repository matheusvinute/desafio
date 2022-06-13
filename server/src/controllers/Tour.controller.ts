import { Request, Response } from 'express';
import { saveFile, readFile } from '../utils/file';
import path from 'path';
import Tour from '../models/Tour';
const filePath = path.resolve(__dirname,'../../../','database','tour.json');

export default class TourController {
    public static get(request: Request, response: Response) {
        (async () => {
            const data: any = await readFile(filePath);
            if (!!data.error) return response.status(500).send(data);
            else return response.status(200).send(data);
        })();
    }

    public static post(request: Request, response: Response) {
        const { atributes } = request.body;
        const tourObject: Tour = new Tour(atributes);
        if (!!tourObject) {
            (async () => {
                const message: any = await saveFile(tourObject.toObject(), filePath);
                if (message.error == true) return response.status(500).send(message);
                else return response.status(200).send(message);
            })();
        }
        else return response.status(400).send({
            'error': true,
            'message': 'missing object atributes'
        });
    }
}