import { text, decorated } from './Logo.module.css'

const Logo = () => {
  return (
    <h1 className={text}>
      Quizz
      <span className={decorated}>Press</span>
    </h1>
  )
}

export default Logo