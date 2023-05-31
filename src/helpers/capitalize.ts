export function toCapitalizeFirstInPair(pairs: Array<Array<string>>) {
  return pairs.map((pair) => {
    const newPair = [toCapitalizedWords(pair[0]), pair[1]];
    return newPair;
  });
}

export function toCapitalizedWords(name: string) {
  let words =
    name
      .toLowerCase()
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      ) || [];

  return words.map(capitalize).join(" ");
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
