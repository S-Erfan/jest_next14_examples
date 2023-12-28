import React, { FC, FormEvent, useState } from "react";

interface IProps {
  saveTodo: (job: string) => void;
}
const TodoCreator: FC<IProps> = ({ saveTodo }) => {
  const [job, setJob] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sub called")
    saveTodo(job);
    setJob("");
  };

  return (
    <form
      data-testid="form_create_todo"
      className="w-full"
      onSubmit={submitHandler}
    >
      <div className="w-full flex items-center gap-5 ">
        <h5 className="text-xl text-neutral-600">Add New Job :</h5>
        <div className="flex-1">
          <input
            type="text"
            className="peer h-10 w-full text-neutral-800 rounded-md border-2 px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:border focus:drop-shadow-lg"
            value={job}
            onChange={({ target }) => setJob(target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={job === "" ? true : false}
          className="rounded-lg px-12 py-2 bg-emerald-900 text-green-100 cursor-pointer hover:bg-emerald-950 duration-300 disabled:opacity-25 disabled:cursor-default "
        >
          Add +
        </button>
      </div>
    </form>
  );
};

export default TodoCreator;
