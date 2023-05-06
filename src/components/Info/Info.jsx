import { container } from './Info.module.css'

const Info = ({ settings, countWinners }) => {
  return (
    <div className={container}>
      <p>Botones: {settings.buttonNumbers}</p>
      <p>Seleccionados totales: {settings.winnersNumber}</p>
      <p>Por seleccionar: {settings.winnersNumber - countWinners}</p>
    </div>
  )
}

export default Info