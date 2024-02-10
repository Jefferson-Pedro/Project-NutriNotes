import { Business } from 'src/app/core/models/Business';

export class PaginatorConfig {
  content?: any[];
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
