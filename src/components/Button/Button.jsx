import Swal from "sweetalert2";
import { button } from "./Button.module.css";
import { ReactComponent as Star } from '../../assets/star.svg'

const Button = ({ content, checkPressed, confetti }) => {
  const handleClick = () => {
    //Mark the button as pressed
    checkPressed(content.number - 1);

    if (content.isWinner) {
      // Show the winner message
      Swal.fire({
        title: "¡Haz sido seleccionado/a!",
        text: "Es hora de responder",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#028fcc",
        background: "#2b2b2b",
        color: "#fff",
      });
      // Show the confetti
      confetti.addConfetti();
    }
  };

  return (
    <div onClick={handleClick}>
      <button
        className={button}
        disabled={content.revealed}
      >
        {(content.isWinner && content.revealed) && <Star fill={"#666666"} width="16px" height="16px"/>}
        <h2>{content.number}</h2>
      </button>
    </div>
  );
};

export default Button;
