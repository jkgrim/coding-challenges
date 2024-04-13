import { useState } from "react";

function Greeting() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app">
      <h2>{toggle ? "Hello There" : "Goodbye."}</h2>
      <button onClick={() => setToggle((toggle) => !toggle)}>Toggle Me!</button>
      <hr />
    </div>
  );
}

export default Greeting;
