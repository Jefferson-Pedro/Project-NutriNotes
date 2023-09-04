import { Business } from "./business";
import { Department } from "./departament";
import { TemplateCheckList } from './templatechecklist';

export interface Checklist {
    idChecklist?: number,
    titulo: String,
    nomeGestor: string,
    dataAuditoria: Date,
    idSetores: Department,
    idBusiness: Business,
    idTemplate: TemplateCheckList,
}
