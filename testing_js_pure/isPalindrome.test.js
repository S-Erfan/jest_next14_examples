const isPalindrome = require("./isPalindrome");

test("Tacocat returns true", () => {
  expect(isPalindrome("Tacocat")).toBe(true);
});

test("Erfan returns false", () => {
  expect(isPalindrome("Erfan")).toBe(false);
});
