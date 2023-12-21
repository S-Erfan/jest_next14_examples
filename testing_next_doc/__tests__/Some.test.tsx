it("sum is worked", () => {
  const sum = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  let a = 2;
  let b = 3;

  expect(sum(a, b)).toBe(5);
});
