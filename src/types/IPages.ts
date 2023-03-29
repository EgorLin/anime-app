export interface IPages<T> {
  currentPage: number;
  hasNextPage: boolean;
  results: Array<T>;
}
