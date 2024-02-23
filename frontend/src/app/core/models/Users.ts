export interface User  {
    idUser?: number,
    nome: string,
    data_nasc: Date | null,
    sexo: string,
    email: string,
    senha?: string,
    telefone: string,
    crn: string,
}
