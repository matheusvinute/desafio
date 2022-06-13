import axios from 'axios'
import Cep from '../models/Cep'

export async function consultCep(cep: string): Promise<Cep> {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.data) throw { 'status': 500, 'message': 'cant send request' }
        if (response.status == 400) throw { 'status': 400, 'message': 'invalid cep' }
        if (!!response.data.erro) throw { 'status': 400, 'message': 'cep dont exists' }
        return {
            endereco: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }
    } catch (error) { throw { 'status': 400, 'message': error } }
}