import React from "react";
import { useStore } from "../store/zustandStore";

export function ZustandCounter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => increment()}>
          Increment
        </button>
        <span role="contentinfo">{count}</span>
        <button aria-label="Decrement value" onClick={() => decrement()}>
          Decrement
        </button>
      </div>
    </div>
  );
}
