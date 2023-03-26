import { IRelation } from "../types/IAnimeRelation";
import { IDataFetch } from "../types/IDataFetch";

export function compareStatus<T>(
  oldValue: IDataFetch<T>,
  newValue: IDataFetch<T>
): boolean {
  return oldValue.status === newValue.status;
}

//TODO rewrite with generics
export function compareRelations(
  oldValue: IRelation[],
  newValue: IRelation[]
): boolean {
  if (oldValue.length !== newValue.length) {
    return false;
  }
  return newValue.every((element, index) => {
    return oldValue[index].id === element.id;
  });
}
