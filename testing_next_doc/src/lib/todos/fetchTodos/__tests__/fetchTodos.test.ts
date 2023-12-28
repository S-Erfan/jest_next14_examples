// import { server } from "@/mocks/server";
// import { rest } from "msw";
// import fetchTodos from "../fetchTodos";

// describe("fetchTodos lib function", () => {
//   it("should return the correct number of todo items", async () => {
//     const todos = await fetchTodos();
//     console.log(todos);
//     expect(todos.length).toBe(2);
//   });
// });

test("sum", () => {
  let sum = (a: number, b: number): number => a + b;
  expect(sum(12, 1)).toBe(13);
});
