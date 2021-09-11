import { createElement, useState } from "react";

export const CounterCreateElement = () => {
  const [count, setCount] = useState(0);

  const title = createElement("h1", {}, "CounterCreateElement");
  const increment = createElement(
    "button",
    {
      onClick: () => setCount(count + 1),
    },
    "increment"
  );
  const decrement = createElement(
    "button",
    {
      onClick: () => setCount(count - 1),
    },
    "decrement"
  );
  const counter = createElement("span", {}, count);
  const buttonContainer = createElement("div", {}, increment, decrement);

  return createElement("div", {}, title, counter, buttonContainer);
};
