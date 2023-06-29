import { Business } from "src/app/models/business"

export interface PaginatorConfig {
  content?: Business[]
  totalPages?: number
  totalElements?: number
  last?: boolean
  pageSize?: number
  pageIndex?: number
  sort?: any
  numberOfElements?: number
  first?: boolean
  empty?: boolean
}