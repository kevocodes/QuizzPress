import { useState } from "react";
import { useResetGame } from "./hooks/useResetGame";
import Logo from "./components/Logo/Logo";
import Controls from "./layouts/Controls/Controls";
import RaffleContainer from "./layouts/RaffleContainer/RaffleContainer";
import "./App.css";

const App = () => {
  const {reset, resetGame} = useResetGame();
  const [settings, setSettings] = useState({
    buttonNumbers: 10,
    winnersNumber: 5,
  });
  
  return (
    <div className="main">
      <Logo />
      <Controls setSettings={setSettings} settings={settings} resetGame={resetGame}/>
      <RaffleContainer
        buttonNumbers={settings.buttonNumbers}
        winnersNumber={settings.winnersNumber}
        reset={reset}
      />
    </div>
  );
};

export default App;
