import Swal from "sweetalert2";
import { button } from "./Button.module.css";
import { Icon } from "@iconify/react";

const Button = ({ content, checkPressed, confetti, setCountWinners }) => {
  const handleClick = () => {
    //Mark the button as pressed
    checkPressed(content.number - 1);

    if (content.isWinner) {
      // Show the winner message
      Swal.fire({
        title: "¡Haz sido seleccionado/a!",
        text: "Es hora de participar",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#028fcc",
        background: "#2b2b2b",
        color: "#fff",
      });
      // Show the confetti
      confetti.addConfetti();
      // Increase the winners count
      setCountWinners((prev) => prev + 1);
    }
  };

  return (
    <div onClick={handleClick}>
      <button className={button} disabled={content.revealed}>
        {content.isWinner && content.revealed && (
          <Icon
            icon="material-symbols:star-rounded"
            fill={"#666666"}
            width="16px"
            height="16px"
          />
        )}
        <h2>{content.number}</h2>
      </button>
    </div>
  );
};

export default Button;
