import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

test("handles onClick", () => {
  render(<Counter>Add One</Counter>);
  const buttonElement = screen.getByText("Add One");
  const divElement = screen.getByRole("contentinfo");
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});
