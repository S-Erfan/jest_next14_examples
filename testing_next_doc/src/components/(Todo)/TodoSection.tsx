"use client";
import { Todo } from "@/types/Todo";
import React, { useEffect, useState } from "react";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

const TodoSection = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function saveTodo(job: string): void {
    const newJob: Todo = {
      completed: false,
      id: crypto.randomUUID(),
      todo: job,
      userId: 1,
    };

    setTodos((prev) => {
      let arr = [...prev];
      arr.push(newJob);
      return arr;
    });
  }

  function completedHandler(id: string): void {
    setTodos((prev) => {
      const index = prev.findIndex((todo) => todo?.id === id);

      if (index >= 0) {
        prev[index].completed = !prev[index].completed;
        return [...prev];
      }
      return prev;
    });
  }

  function deletedHandler(id: string): void {
    setTodos((prev) => {
      const index = prev.findIndex((todo) => todo?.id === id);

      if (index >= 0) {
        prev.splice(index, 1);
        return [...prev];
      }
      return prev;
    });
  }

  useEffect(() => {
    console.table(todos);
  }, [todos]);

  return (
    <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-full ">
      <TodoCreator saveTodo={saveTodo} />
      <article className="flex flex-col gap-3 mt-5">
        {todos.length ? (
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              checkedHandler={completedHandler}
              deletedHandler={deletedHandler}
            />
          ))
        ) : (
          <div className="h-[30vh] flex justify-center items-center gap-3 text-neutral-800">
            <span className="text-lg"> Your Jobs is Empty ! </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </div>
        )}
      </article>
    </div>
  );
};

export default TodoSection;
