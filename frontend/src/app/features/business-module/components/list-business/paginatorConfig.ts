import { Business } from "src/app/core/models/business";


export class PaginatorConfig {
  content?: Business[]
  totalPages?: number
  totalElements: number = 0;
  last?: boolean
  pageSize?: number
  pageIndex?: number
  sort?: any
  numberOfElements?: number
  first?: boolean
  empty?: boolean 
}