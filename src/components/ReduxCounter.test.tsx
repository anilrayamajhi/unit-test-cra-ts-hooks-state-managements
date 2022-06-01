import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "../store/reduxStore";
import { ReduxCounter } from "./ReduxCounter";

test("increment", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );
  const counterElement = screen.getByRole("contentinfo");
  expect(counterElement).toHaveTextContent("0");

  const buttonElement = screen.getByText("Increment");

  fireEvent.click(buttonElement);

  expect(counterElement).toHaveTextContent("1");
});

test("increment again", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );
  const counterElement = screen.getByRole("contentinfo");
  expect(counterElement).toHaveTextContent("0");

  const buttonElement = screen.getByText("Increment");

  fireEvent.click(buttonElement);

  expect(counterElement).toHaveTextContent("1");
});
