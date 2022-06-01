import { useCallback, useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return { counter, increment };
}
