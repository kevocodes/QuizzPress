import Swal from 'sweetalert2'
import ControlButton from '../../components/ControlButton/ControlButton'
import { container } from './Controls.module.css' 

const Controls = ({setSettings, settings, resetGame}) => {
  const changeButtonNumbers = async () => {
    const { value } = await Swal.fire({
      title: '¿Cuántos botones quieres?',
      input: 'number',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#028fcc",
      background: "#2b2b2b",
      color: "#fff",
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar una cantidad'
        }

        if (value < settings.winnersNumber) {
          return 'No pueden haber menos botones que seleccionados'
        }
      }
    })

    if (value) {
      setSettings((prevSettings) => {
        return {
          ...prevSettings,
          buttonNumbers: Number(value)
        }
      })
    }
  }

  const changeWinnersNumber = async () => {
    const { value } = await Swal.fire({
      title: '¿Cuántos ganadores quieres?',
      input: 'number',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#028fcc",
      background: "#2b2b2b",
      color: "#fff",
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar una cantidad'
        }

        if(value < 1) return 'Debes ingresar un número mayor a 0'

        if (value > settings.buttonNumbers) {
          return 'No pueden haber más ganadores que botones'
        }
      }
    })

    if (value) {
      setSettings((prevSettings) => {
        return {
          ...prevSettings,
          winnersNumber: Number(value)
        }
      })
    }
  }

  return (
    <div className={container}>
      <ControlButton text="# de botones" action={changeButtonNumbers}/>
      <ControlButton text="# de seleccionados" action={changeWinnersNumber}/>
      <ControlButton text="Reiniciar" action={resetGame}/>
    </div>
  )
}

export default Controls