export function getGlobalValue(name: string): string {
  const value = window.getComputedStyle(document.body).getPropertyValue(name);
  return value;
}

export function getNumberFromString(value: string): number {
  const v = value.match(/[+-]?([0-9]*[.])?[0-9]+/);
  return v !== null ? +v[0] : 0;
}
