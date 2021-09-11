import { useState } from "react";

export const CounterFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CounterFunction</h1>
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </>
  );
};
