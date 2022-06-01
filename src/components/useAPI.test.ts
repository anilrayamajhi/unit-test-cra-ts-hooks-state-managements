import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useAPI } from "./useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "GI" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("API Hook", async () => {
  const { result } = renderHook(() => useAPI());

  // Function available from
  // "@testing-library/react-hook" renderHook function
  // await waitForNextUpdate();
  // throwing error: Yet not supported for React 18

  await waitFor(() => expect(result.current.data).toEqual({ name: "GI" }));
});
