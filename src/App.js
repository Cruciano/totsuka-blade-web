import Intro from "./components/intro";
import Menu from "./components/menu";
import GameCanvas from "./components/gameCanvas";
import { useState } from "react";
import PressToStart from "./components/pressToStart";

function App() {
  const [mode, setMode] = useState(0);

  const pressToStartHandler = () => {
    setMode(1);
    setTimeout(() => setMode(2), 6000);
  }

  const onPlayHandler = () => {
    setMode(3);
  }

  return (
    <div className="App">
      {mode === 0 && <PressToStart onClick={pressToStartHandler}/>}
      {mode === 1 && <Intro />}
      {mode === 2 && <Menu onPlay={onPlayHandler} />}
      {mode === 3 && <GameCanvas />}
    </div>
  );
}

export default App;
