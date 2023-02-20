import Intro from "./components/intro";
import Menu from "./components/menu";
import GameCanvas from "./components/gameCanvas";
import { useState } from "react";
import PressToStart from "./components/pressToStart";

function App() {
  const [mode, setMode] = useState(3);

  const pressToStart = () => {
    setMode(1);
    setTimeout(() => setMode(2), 6000);
  }

  const onPlay = () => {
    setMode(3);
  }

  return (
    <div className="App">
      {mode === 0 && <PressToStart onClick={pressToStart}/>}
      {mode === 1 && <Intro />}
      {mode === 2 && <Menu onPlay={onPlay} />}
      {mode === 3 && <GameCanvas />}
    </div>
  );
}

export default App;
