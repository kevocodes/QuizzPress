import Logo from "./components/Logo/Logo";
import Controls from "./layouts/Controls/Controls";
import RaffleContainer from "./layouts/RaffleContainer/RaffleContainer";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [settings, setSettings] = useState({
    buttonNumbers: 10,
    winnersNumber: 5,
  });

  return (
    <div className="main">
      <Logo />
      <Controls setSettings={setSettings} settings={settings}/>
      <RaffleContainer
        buttonNumbers={settings.buttonNumbers}
        winnersNumber={settings.winnersNumber}
      />
    </div>
  );
};

export default App;
