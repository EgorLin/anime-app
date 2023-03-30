import { IDataFetch } from "../types/IDataFetch";

export function compareStatus<T>(
  oldValue: IDataFetch<T>,
  newValue: IDataFetch<T>
): boolean {
  return oldValue.status === newValue.status;
}

interface IObjectId {
  id: number | string;
}

export function compareId<T extends IObjectId>(
  oldValue: Array<T>,
  newValue: Array<T>
): boolean {
  if (oldValue.length !== newValue.length) {
    return false;
  }
  return newValue.every((element, index) => {
    return oldValue[index].id === element.id;
  });
}
