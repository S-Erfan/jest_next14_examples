import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "@/components/(Todo)/TodoItem";
import { Todo } from "@/types/Todo";

const mockTodo: Todo = {
  completed: false,
  id: "123454sddsf+21_45jndf",
  todo: "Hello World!",
  userId: 1,
};

const deletedMock = jest.fn();
const checkMock = jest.fn();

describe("Todo Item Component", () => {
  describe("Render", () => {
    it("should render a checkbox", () => {
      render(
        <TodoItem
          todo={mockTodo}
          checkedHandler={deletedMock}
          deletedHandler={checkMock}
        />
      );

      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveClass("hidden");
    });

    it("should render tow svg", () => {
      render(
        <TodoItem
          todo={mockTodo}
          checkedHandler={deletedMock}
          deletedHandler={checkMock}
        />
      );

      const checkedItem = screen.getByTestId("checked_item");
      expect(checkedItem).toBeInTheDocument();

      const deletedItem = screen.getByTestId("deleted_item");
      expect(deletedItem).toBeInTheDocument();
    });

    it("should render label", () => {
      render(
        <TodoItem
          todo={mockTodo}
          checkedHandler={deletedMock}
          deletedHandler={checkMock}
        />
      );

      const mainLabel = screen.getByTestId("label_main");
      expect(mainLabel).toBeInTheDocument();
      expect(mainLabel).toHaveAttribute("for", "todo_123454sddsf+21_45jndf");
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("id", "todo_123454sddsf+21_45jndf");
    });

    it("should render todo content", () => {
      render(
        <TodoItem
          todo={mockTodo}
          checkedHandler={deletedMock}
          deletedHandler={checkMock}
        />
      );

      const todo = screen.getByText(mockTodo.todo);
      expect(todo).toBeInTheDocument();
    });
  });

  describe("Logically", () => {
    it("should checked handler", async () => {
      const delMock = jest.fn();
      const tikMock = jest.fn();
      render(
        <TodoItem
          todo={mockTodo}
          checkedHandler={tikMock}
          deletedHandler={delMock}
        />
      );

      const checkbox = screen.getByTestId("checked_item");
      await userEvent.click(checkbox);
      expect(tikMock).toHaveBeenCalledWith(mockTodo.id);
      expect(delMock).not.toHaveBeenCalled();
    });

    it("should deleted handler", async () => {
      const delMock = jest.fn();
      const tikMock = jest.fn();

      render(
        <TodoItem
          todo={mockTodo}
          checkedHandler={tikMock}
          deletedHandler={delMock}
        />
      );

      const deletedItem = screen.getByTestId("deleted_item");
      await userEvent.click(deletedItem);
      expect(delMock).toHaveBeenCalledWith(mockTodo.id);
      expect(tikMock).not.toHaveBeenCalled();
    });
  });
});
