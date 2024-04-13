import { useState } from "react";

import Counter from "./components/Counter";
import Clock from "./components/Clock";
import FontResize from "./components/FontResize";
import Greeting from "./components/Greeting";

import "./App.css";

function App() {
  const [mounted, setMounted] = useState(false);

  return (
    <div className="app">
      <Counter />

      {mounted && <Clock />}
      <button onClick={() => setMounted((mounted) => !mounted)}>
        {mounted ? "Unmount" : "Mount"}
      </button>
      <hr />

      <FontResize />
      <Greeting />
    </div>
  );
}

export default App;
