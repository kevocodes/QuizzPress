import { useState } from 'react';

export const useResetGame = () => {
  const [reset, setReset] = useState(false);

  const resetGame = () => setReset(!reset);
  
  return {reset, resetGame};
};