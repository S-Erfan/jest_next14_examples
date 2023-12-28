import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoCreator from "@/components/(Todo)/TodoCreator";

const mockSaveData = jest.fn();

describe("Add Todo", () => {
  describe("Render", () => {
    it("should render a form", () => {
      render(<TodoCreator saveTodo={mockSaveData} />);
      const form = screen.getByTestId("form_create_todo");

      expect(form).toBeInTheDocument();
    });
    it("should render a heading", () => {
      render(<TodoCreator saveTodo={mockSaveData} />);
      const heading = screen.getByRole("heading", {
        level: 5,
        name: "Add New Job :",
      });
      expect(heading).toBeInTheDocument();
    });

    it("should render a input", async () => {
      render(<TodoCreator saveTodo={mockSaveData} />);

      const input = screen.getByRole("textbox");
      expect(input).toBeInTheDocument();

      const inputValue = "Hello, World!";
      await userEvent.type(input, inputValue);

      expect(input).toHaveValue(inputValue);
    });
    it("should render a button", async () => {
      render(<TodoCreator saveTodo={mockSaveData} />);

      const button = screen.getByRole("button", { name: /add/i });
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();

      const input = screen.getByRole("textbox");
      await userEvent.type(input, "hello world!");
      expect(button).toBeEnabled();
    });
  });

  describe("Logically", () => {
    it("add job scenario", async () => {
      render(<TodoCreator saveTodo={mockSaveData} />);

      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: /add/i });
      expect(button).toBeDisabled();
      await userEvent.type(input, "hello world!");
      expect(input).toHaveValue("hello world!");
      expect(button).toBeEnabled();
      await userEvent.click(button);
      expect(mockSaveData).toHaveBeenCalled();
      expect(input).toHaveValue("");
    });
  });
});
