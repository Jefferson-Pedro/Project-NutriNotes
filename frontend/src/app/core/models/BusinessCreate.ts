import { CreateUser } from "./CreateUser";
import { Department } from "./Department";

export interface BusinessCreate {
    idBusiness?: any;
    nome: string;
    cnpj: string;
    cep?: string;
    telefone?: string;
    logradouro?: string;
    compl?: string;
    cidade?: string;
    bairro?: string;
    uf?: string;
    representante?: string;
    responsavelTec?: CreateUser;
    setores?: Department[];
    plano?: string;
  }
