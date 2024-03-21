import { Department } from "./Department";
import { User } from "./User";

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
    responsavelTec?: User;
    setores?: Department[];
    plano?: string;
  }
  