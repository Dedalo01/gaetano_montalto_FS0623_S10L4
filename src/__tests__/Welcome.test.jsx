import Welcome from "../components/Welcome";
import { render, screen } from "@testing-library/react";

describe("Correct mounting", () => {
  it("correctly mounts header", () => {
    render(<Welcome />);

    const heading = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(heading).toBeInTheDocument();
  });
});
