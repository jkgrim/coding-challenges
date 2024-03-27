import { useState } from "react";

import Counter from "./components/Counter";
import Clock from "./components/Clock";

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
    </div>
  );
}

export default App;
