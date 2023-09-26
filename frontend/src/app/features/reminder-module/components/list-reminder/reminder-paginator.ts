import { Reminder } from 'src/app/core/models/Reminder';

export class ReminderPaginator {
  content?: Reminder[];
  totalPages?: number;
  totalElements: number = 0;
  last?: boolean;
  pageSize?: number;
  pageIndex?: number;
  sort?: any;
  numberOfElements?: number;
  first?: boolean;
  empty?: boolean;
}
