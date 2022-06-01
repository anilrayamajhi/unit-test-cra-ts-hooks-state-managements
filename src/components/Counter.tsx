import React, { ReactNode, useState } from "react";

const Counter: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>{children}</button>
      <div role="contentinfo">Count is {counter}</div>
    </div>
  );
};

export default Counter;
