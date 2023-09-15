import { Checklist } from 'src/app/core/models/Checklist';

export class PaginatorConfig2 {
  content?: Checklist[];
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
