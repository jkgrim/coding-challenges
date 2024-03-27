import { useState } from "react";

function Counter() {
  const [prevCount, setCount] = useState(0);

  return (
    <div className="app">
      <h3 className="count">{prevCount}</h3>
      <button
        onClick={() => setCount(prevCount > 0 ? prevCount - 1 : prevCount)}
        className="minus"
      >
        Minus
      </button>
      <button onClick={() => setCount(prevCount + 1)} className="plus">
        Plus
      </button>
      <hr />
    </div>
  );
}

export default Counter;
