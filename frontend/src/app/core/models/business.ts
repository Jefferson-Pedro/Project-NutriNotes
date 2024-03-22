import { Department } from "./Department";
import { CreateUser } from "./CreateUser";

export interface Business {
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
  