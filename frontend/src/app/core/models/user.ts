import { Profile } from './Profile';

export interface User {
  login: string;
  senha: string;
  id?: Profile;
}
