import { CreateUser } from "./CreateUser";


export interface Reminder {
  idReminder: number;
  titulo: string;
  descricao: string;
  dataEvento: Date;
  categoria: string;
  idUser: CreateUser; 
}