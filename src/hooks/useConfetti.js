import { useEffect, useState } from 'react'
import JSConfetti from 'js-confetti'

export const useConfetti = () => {
  const [confetti, setConfetti] = useState(null)

  useEffect(() => {
    setConfetti(new JSConfetti())
  }, [])

  return { confetti }
}