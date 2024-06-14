import { BusinessCreate } from "./BusinessCreate";
import { Department } from "./Department";
import { TemplateCheckList } from "./TemplateChecklist";


export interface Checklist {
    idChecklist?: number;
    titulo: String;
    nomeGestor?: string;
    dataAuditoria?: Date;
    idSetores?: Department;
    idBusiness?: BusinessCreate;
    idTemplate?: TemplateCheckList;
  }
