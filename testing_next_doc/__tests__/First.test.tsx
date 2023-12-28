import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home testing", () => {
  it("test have logo text in Home", () => {
    render(<Home />); //! ARRANGE
    
    // const myElement = screen.getByText("logo");
    const myElement = screen.getByText(/logo/i); //! ACT

    expect(myElement).toBeInTheDocument(); //! ASSERT
  });

  it("in Home h1 should be ", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("take snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
