import { getButtons, getWinners } from "../../utils/controls.actions";
import ControlButton from "../../components/ControlButton/ControlButton";
import { container } from "./Controls.module.css";

const Controls = ({ setSettings, settings, resetGame }) => {
  const changeButtonNumbers = async () => {
    const { value } = await getButtons(settings);

    if (value) {
      setSettings((prevSettings) => {
        return {
          ...prevSettings,
          buttonNumbers: Number(value),
        };
      });
    }
  };

  const changeWinnersNumber = async () => {
    const { value } = await getWinners(settings);

    if (value) {
      setSettings((prevSettings) => {
        return {
          ...prevSettings,
          winnersNumber: Number(value),
        };
      });
    }
  };

  return (
    <div className={container}>
      <ControlButton text="# de botones" action={changeButtonNumbers} />
      <ControlButton text="# de seleccionados" action={changeWinnersNumber} />
      <ControlButton text="Reiniciar" action={resetGame} />
    </div>
  );
};

export default Controls;
