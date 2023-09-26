import { Profile } from "./Profile";

export interface Reminder {
    idReminder: number;
    titulo: string,
    descricao: string;
    dataEvento: Date;
    idProfile: Profile;
  }