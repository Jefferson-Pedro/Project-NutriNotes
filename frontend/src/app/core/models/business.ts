import { Profile } from "./profile";

export interface Business {

    idBusiness?: number,
    nome: string,
    cnpj: string,
    cep?: string,
    telefone?: string,
    logradouro?: string,
    compl?: string,
    cidade?: string,
    bairro?: string,
    uf?: string,
    representante?: string,
    responsavelTec?: Profile,
    plano?: string
}
