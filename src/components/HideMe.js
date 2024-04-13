import { useState } from "react";

function HideMe() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="app">
      <h2>{hidden ? "" : "Hide Me"}</h2>
      <button onClick={() => setHidden((hidden) => !hidden)}>
        {hidden ? "Show" : "Hide"}
      </button>
      <hr />
    </div>
  );
}

export default HideMe;
