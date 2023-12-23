const reverseString = require("./reverseString");

test("Reverse any given string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
