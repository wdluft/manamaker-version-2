import React from 'react'

import { CalculatorContext } from '../../contexts/CalculatorContext';

const ResetButton = () => {

  return <CalculatorContext.Consumer>
    {(context) => {
      const { handleReset } = context;
      return (
        <button onClick={handleReset}>Reset</button>
      )
    }}
  </CalculatorContext.Consumer >

}

export default ResetButton
