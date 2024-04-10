import { useState } from "react";

function FontResize() {
  const [fontSize, setFontSize] = useState(20);

  return (
    <div className="app">
      <button
        onClick={() => setFontSize(fontSize > 0 ? fontSize - 4 : fontSize)}
      >
        Shrink
      </button>
      <button onClick={() => setFontSize(fontSize + 4)}>Grow</button>
      <br />
      <br />
      <div style={{ fontSize: fontSize }}>{fontSize}px</div>
      <hr />
    </div>
  );
}

export default FontResize;
