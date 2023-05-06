import { container } from './Info.module.css'

const Info = ({ settings }) => {
  return (
    <div className={container}>
      <p><span>Botones: </span>{settings.buttonNumbers}</p>
      <p><span>Seleccionados: </span>{settings.winnersNumber}</p>
    </div>
  )
}

export default Info