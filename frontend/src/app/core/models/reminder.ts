import { Profile } from "./profile";

export interface Reminder {
    idReminder: number,
    descricao: string,
    dataEvento: Date,
    idProfile: Profile,
}
