import { Todo } from "@/types/Todo";
import React, { FC } from "react";

interface IProps {
  todo: Todo;
  checkedHandler: (id: string) => void;
  deletedHandler: (id: string) => void;
}

const TodoItem: FC<IProps> = ({ todo, checkedHandler, deletedHandler }) => {
  return (
    <div>
      <input
        className="hidden"
        type="checkbox"
        id={`todo_${todo.id}`}
        checked={todo.completed}
        onChange={() => checkedHandler(todo.id)}
      />
      <label
        className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
        htmlFor={`todo_${todo.id}`}
        data-testid="label_main"
      >
        <span
          className={`flex items-center justify-center w-5 h-5 border-2  rounded-full transition-all ease-out ${
            todo.completed
              ? "bg-[#10B981] border-[#10B981] text-white"
              : "border-gray-300 text-transparent"
          } `}
          data-testid="checked_item"
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span
          className="flex items-center justify-center w-5 h-5 ml-2"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            deletedHandler(todo.id);
          }}
          data-testid="deleted_item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </span>
        <span className="ml-4 text-sm">{todo.todo}</span>
      </label>
    </div>
  );
};

export default TodoItem;
