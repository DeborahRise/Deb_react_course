import React, { useState } from 'react'

export const useToggle = (initVal = true) => {
  const [state, setState] = useState(initVal);

  const Toggle = () => {
    setState((prev) => !prev)
  };
  return (
    [state, Toggle]
  );
}
