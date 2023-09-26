import { Department } from "./Department";

export interface TemplateCheckList {
    idTemplate: number;
    nome: string;
    tipoChecklist: string;
    frequencia: number;
    idSetores: Department;
  }
  