import { render, screen } from "@testing-library/react";
import NavbarFixed from "../Header/NavbarFixed";

describe("Header => navbar fixed ", () => {
  it("should render navbar with my props title", () => {
    const title: string = "my props title";
    render(<NavbarFixed titleNavbar={title} />);

    const titleRender = screen.getByRole("heading", { level: 3, name: title });
    expect(titleRender).toBeInTheDocument();
  });

  it("should render navbar without props to be (Todo List)", () => {
    render(<NavbarFixed />);

    const titleRender = screen.getByRole("heading", {
      level: 3,
      name: "Todo List",
    });
    expect(titleRender).toBeInTheDocument();
  });

  it("should render avatar component in navbar", () => {
    render(<NavbarFixed />);

    const avatarUser = screen.getByTestId("avatar-user");
    expect(avatarUser).toBeInTheDocument();
  });
});
