import React from 'react';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const ResetButton = () => (
  <CalculatorContext.Consumer>
    {context => {
      const { handleReset } = context;
      return (
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      );
    }}
  </CalculatorContext.Consumer>
);

export default ResetButton;
