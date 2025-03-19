import { footer } from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <p>Quizzpress, {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
