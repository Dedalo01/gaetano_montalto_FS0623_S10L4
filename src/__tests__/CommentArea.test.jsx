import CommentArea from "../components/CommentArea";
import { render, screen } from "@testing-library/react";

describe("Correct mounting", () => {
  it("No istance of CommentList at first Render", () => {
    render(<CommentArea />);
  });
});
