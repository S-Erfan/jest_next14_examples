import type { Todo } from "@/types/Todo";

export default async function fetchTodos() {
  try {
    const res = await fetch("/todos");
    console.log(res , "my res fetch")
    const todos: Todo[] = await res.json();
    console.log(todos, "user get todo in here ");
    return todos;
  } catch (error) {
    if (error instanceof Error) console.log("fetchTodos error : ", error);
    return [];
  }
}
