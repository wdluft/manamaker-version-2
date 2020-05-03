import React, { useContext } from 'react';
import { Button } from '../elements/Button';
import { CalculatorContext } from '../../contexts/CalculatorContext';

const ResetButton = () => {
  const { handleReset } = useContext(CalculatorContext);
  return (
    <Button type="button" onClick={handleReset}>
      Reset
    </Button>
  );
};

export default ResetButton;
