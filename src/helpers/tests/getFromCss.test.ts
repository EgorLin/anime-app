import { getNumberFromString } from "../getFromCSS";

describe("Convertaion css sizes from string to number", () => {
  test("Middle value", () => {
    expect(getNumberFromString("100px")).toBe(100);
  });
  test("Min value", () => {
    expect(getNumberFromString("0px")).toBe(0);
  });
  test("Max value", () => {
    expect(getNumberFromString("1000px")).toBe(1000);
  });
  test("Float value", () => {
    expect(getNumberFromString("1.23vh")).toBe(1.23);
  });
  test("Text before value", () => {
    expect(getNumberFromString("px100")).toBe(100);
  });
  test("Combination of texts", () => {
    expect(getNumberFromString("px100rem")).toBe(100);
  });
  test("Combination of texts and numbers", () => {
    expect(getNumberFromString("px100rem200")).toBe(100);
  });
  test("Combination of texts and numbers with float", () => {
    expect(getNumberFromString("px1.23rem200")).toBe(1.23);
  });
});
