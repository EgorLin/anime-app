export interface IPages<T> {
  currentPage: number;
  hasNextPage: boolean;
  totalPages?: number;
  totalResults?: number;
  results: Array<T>;
}
