import { rest } from "msw";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    console.log("user is here for test");
    let response = res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          todo: "work in jest",
          completed: false,
          id: 1,
        },
        {
          userId: 1,
          todo: "comment for telegram",
          completed: false,
          id: 2,
        },
      ])
    );
    console.log("response in mock handlers : ", response);
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          todo: "work in jest",
          completed: false,
          id: 1,
        },
        {
          userId: 1,
          todo: "comment for telegram",
          completed: false,
          id: 2,
        },
      ])
    );
  }),
];
