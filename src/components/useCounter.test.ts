import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("should increment", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(1);

  act(() => {
    result.current.increment();
  });
  expect(result.current.counter).toBe(2);
});
