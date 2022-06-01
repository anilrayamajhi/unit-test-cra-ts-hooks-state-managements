import { render, screen } from "@testing-library/react";
import React from "react";
import Person from "./Person";

test("renders a name", () => {
  render(<Person name="GI" />);
  const linkElement = screen.getByText(/Name: GI/i);
  expect(linkElement).toBeInTheDocument();
});

test("get By role", () => {
  render(<Person name="GI" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name: GI");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
