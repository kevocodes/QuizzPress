import RaffleContainer from "./layouts/RaffleContainer/RaffleContainer";
import Logo from "./components/Logo/Logo";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Logo />
      <RaffleContainer buttonNumbers={20} winnersNumber={5} />
    </div>
  );
};

export default App;
