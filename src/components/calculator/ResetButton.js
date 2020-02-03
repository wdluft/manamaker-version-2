import React, { useContext } from 'react';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const ResetButton = () => {
  const { handleReset } = useContext(CalculatorContext);
  return (
    <button type="button" onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetButton;
