import { User } from "./Users";


export interface Reminder {
  idReminder: number;
  titulo: string;
  descricao: string;
  dataEvento: Date;
  categoria: string;
  idUser: User; 
}