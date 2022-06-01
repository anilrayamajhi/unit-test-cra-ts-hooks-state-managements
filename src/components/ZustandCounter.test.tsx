import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { useStore } from "../store/zustandStore";
import { ZustandCounter } from "./ZustandCounter";

const originalState = useStore.getState();

beforeEach(() => useStore.setState(originalState));

test("increment", () => {
  render(<ZustandCounter />);
  const counterElement = screen.getByRole("contentinfo");
  expect(counterElement).toHaveTextContent("0");

  const buttonElement = screen.getByText("Increment");

  fireEvent.click(buttonElement);

  expect(counterElement).toHaveTextContent("1");
});

test("increment again", () => {
  render(<ZustandCounter />);
  const counterElement = screen.getByRole("contentinfo");
  expect(counterElement).toHaveTextContent("0");

  const buttonElement = screen.getByText("Increment");

  fireEvent.click(buttonElement);

  expect(counterElement).toHaveTextContent("1");
});
