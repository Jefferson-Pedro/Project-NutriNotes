export interface ItemChecklist{
    idItem: IdItemCheckList;
    valor: string;
    observacoes: string;
}

interface IdItemCheckList {
    question: {[key:string]:number},
    checklist: {[key:string]:number}
}