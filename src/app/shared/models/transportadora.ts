import { Estados } from '../enums/estados.enum';
import { Modal } from '../enums/modal.enum';

export interface Transportadora {
    id: number;
    email: string;
    nome: string;
    empresa: string;
    telefone: string;
    modal: Modal;
    cep: string;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    uf: Estados;
}
