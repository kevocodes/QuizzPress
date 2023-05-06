import { useState,useEffect } from "react";
import { container } from "./RaffleContainer.module.css"
import { useConfetti } from "../../hooks/useConfetti";
import Button from "../../components/Button/Button"

const RaffleContainer = ({buttonNumbers, winnersNumber}) => {
  const [buttons, setButtons] = useState([]);
  const { confetti } = useConfetti();

  useEffect(() => {
    const newButtons = Array(buttonNumbers).fill().map((_, i) => ({
      number: i + 1,
      isWinner: false
    }));

    // Randomly select the winners
    for (let i = 0; i < winnersNumber; i++) {
      const randomIndex = Math.floor(Math.random() * buttonNumbers);
      
      if(newButtons[randomIndex].isWinner) {
        i--;
        continue;
      }

      newButtons[randomIndex].isWinner = true;
    }

    setButtons(newButtons);
  }, [buttonNumbers, winnersNumber]);

  const handleButtonClick = (id) => {
    const newButtons = [...buttons];
    newButtons[id].revealed = true;
    setButtons(newButtons);
  };

  return (
    <div className={container}>
      {buttons.map((button, i) => (
        <Button key={i} content={button} checkPressed={handleButtonClick} confetti={confetti}/>
      ))}
    </div>
  )
}

export default RaffleContainer