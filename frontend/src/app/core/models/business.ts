import { Department } from "./Department";
import { Profile } from "./Profile";

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
    responsavelTec?: Profile;
    setores?: Department[];
    plano?: string;
  }
  