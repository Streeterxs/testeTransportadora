import { Estados } from '../enums/estados.enum';

export interface Transportadora {
    id: number;
    email: string;
    nome: string;
    empresa: string;
    telefone: string;
    modal: string;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    uf: Estados;
}
