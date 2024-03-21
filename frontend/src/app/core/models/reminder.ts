import { User } from "./User";

export interface Reminder {
  idReminder: number;
  titulo: string;
  descricao: string;
  dataEvento: Date;
  categoria: string;
  idUser: User; 
}