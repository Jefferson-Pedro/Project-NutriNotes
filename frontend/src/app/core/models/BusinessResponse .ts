import { CreateUser } from "./CreateUser";
import { Department } from "./Department";

export interface BusinessResponse {
  idBusiness: number
  nome: string
  cnpj: string
  cep: string
  telefone: string
  logradouro: string
  compl: any
  cidade: string
  bairro: string
  uf: string
  representante: string
  plano: string
  idUser: number
  nomeUser: string
  setores: Department[]
}
