import { User } from "./User";

export interface CreateUser extends User {
    idUser: number,
    senha: string,
}
