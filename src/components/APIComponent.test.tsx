import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import React from "react";
import APIComponent from "./APIComponent";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "GI" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<APIComponent />);

  // const out = await waitFor(() => screen.getByRole("contentinfo"));
  const out = await screen.findByRole("contentinfo");

  expect(out).toHaveTextContent("Name: GI");
});
