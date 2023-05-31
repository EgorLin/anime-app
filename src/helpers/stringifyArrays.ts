export const stringifyArrays = (params: Object) => {
  let options = {};

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      if (value.length) {
        let stringified = '["';
        stringified += value.join('", "');
        options[key] = stringified + '"]';
      }
    } else {
      options[key] = value;
    }
  }

  return options;
};
