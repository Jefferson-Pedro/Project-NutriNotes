import { Business } from "./business";
import { Department } from "./department";
import { TemplateCheckList } from "./template";

export interface Checklist {
    idChecklist?: number,
    titulo: String,
    nomeGestor?: string,
    dataAuditoria?: Date,
    idSetores?: Department,
    idBusiness?: Business,
    idTemplate?: TemplateCheckList,
}
