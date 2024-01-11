import BookList from "../components/BookList";
import { render, screen, fireEvent } from "@testing-library/react";
import fantasyBookArr from "../data/fantasy.json";

describe("Mounting Component", () => {
  it("render all books", () => {
    render(<BookList books={fantasyBookArr} />);

    const singleBookList = screen.getAllByTestId("singlebook");
    expect(singleBookList).toHaveLength(fantasyBookArr.length);
  });
});
