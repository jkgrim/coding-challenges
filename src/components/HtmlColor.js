import { useState } from "react";

function HtmlColor() {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("");

  const handleColor = (newColor) => {
    setColor((color) => newColor);
  };

  const handleChange = (e) => {
    setMessage((message) => e.target.value);
  };

  return (
    <div className="app">
      <h2 style={{ color: color }}>{color}</h2>
      <input
        type="text"
        onChange={handleChange}
        value={message}
        placeholder="Enter HTML color"
      />
      <button onClick={() => handleColor(message)}>Change Color</button>
      <hr />
    </div>
  );
}

export default HtmlColor;
