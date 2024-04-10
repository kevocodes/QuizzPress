import { footer } from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <p>Desarrollado exclusivamente para la materia &quot;Educación y Género&quot;, {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer