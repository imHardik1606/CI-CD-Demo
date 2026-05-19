import sum from "./sum.js";

describe("test for sum fnx", () => {
  test("adds 2 + 2 to equal 4", () => {
    // (inp) (output)
    expect(sum(2, 2)).toBe(4);
  });

  test("adds -5 + -5 to equal -10", () => {
    // (inp) (output)
    expect(sum(-5, -5)).toBe(-10);
  });
});
