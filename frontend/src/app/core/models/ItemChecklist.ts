import { IdItemCheckList } from "./IdItemCheckList";

export interface ItemChecklist{
    idItem: IdItemCheckList;
    question: string;
    status?: string;
    observacoes?: string;
}