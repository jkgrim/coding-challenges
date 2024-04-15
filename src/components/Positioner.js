import { useState } from "react";

function Positioner() {
  const [position, setPosition] = useState("center");

  const handlePosition = (pos) => {
    setPosition(pos);
  };

  return (
    <div className="app">
      <h2 className="move-me" style={{ justifyContent: position }}>
        Push me around
      </h2>
      <button onClick={() => handlePosition("left")}>Left</button>
      <button onClick={() => handlePosition("center")}>Center</button>
      <button onClick={() => handlePosition("right")}>Right</button>
      <hr />
    </div>
  );
}

export default Positioner;
