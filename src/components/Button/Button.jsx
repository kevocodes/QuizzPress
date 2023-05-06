import Swal from 'sweetalert2'
import { button } from './Button.module.css'

const Button = ({content, checkPressed, confetti}) => {

  const handleClick = () => {
    //Mark the button as pressed
    checkPressed(content.number - 1);

    if(content.isWinner) {
      // Show the winner message
      Swal.fire({
        title: '¡Haz sido seleccionado/a!',
        text: 'Es hora de responder',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#028fcc',
        background: '#2b2b2b',
        color: '#fff',
      })
      // Show the confetti
      confetti.addConfetti();
    }
  }

  return (
    <button className={`${button}`} onClick={handleClick} disabled={content.revealed}>
      <h2>{content.number}</h2>
      {content.isWinner && <span>Winner!</span>}
    </button>
  )
}

export default Button