import { footer } from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <p>Desarrollado exclusivamente para la materia &quot;prevención de la violencia social&quot;, {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer