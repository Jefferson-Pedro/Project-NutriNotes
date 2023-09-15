import { Profile } from './Profile';

export interface Reminder {
  idReminder: number;
  descricao: string;
  dataEvento: Date;
  idProfile: Profile;
}
