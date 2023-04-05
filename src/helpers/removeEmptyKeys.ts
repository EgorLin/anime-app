export function removeEmptyKeys(dirtyObj: Object) {
  const clearObj = {};
  for (const [key, value] of Object.entries(dirtyObj)) {
    if (value) {
      Object.defineProperty(clearObj, key, { value, enumerable: true });
    }
  }

  return clearObj;
}
