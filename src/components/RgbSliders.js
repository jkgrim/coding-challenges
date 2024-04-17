import { useState } from "react";

function RgbSliders() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleRed = (e) => {
    setRed((red) => e.target.value);
  };

  const handleGreen = (e) => {
    setGreen((green) => e.target.value);
  };

  const handleBlue = (e) => {
    setBlue((blue) => e.target.value);
  };

  return (
    <div className="app">
      <div
        className="color"
        style={{
          background: "rgb(" + red + "," + green + "," + blue + ")"
        }}
      ></div>

      <div>
        rgb({red}, {green}, {blue})
      </div>
      <input
        id="red"
        type="range"
        min="0"
        max="225"
        steps="1"
        value={red}
        onChange={handleRed}
      />
      <input
        id="blue"
        type="range"
        min="0"
        max="225"
        steps="1"
        value={green}
        onChange={handleGreen}
      />
      <input
        id="green"
        type="range"
        min="0"
        max="225"
        steps="1"
        value={blue}
        onChange={handleBlue}
      />
    </div>
  );
}

export default RgbSliders;
