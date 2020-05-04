import React from 'react';

// Component imports
import TotalLandsNeeded from './TotalLandsNeeded';
import ManaInputs from './ManaInputs';
import ResetButton from './ResetButton';
import { CalculatorWrapper } from '../elements/CalculatorStyles';
import CalculatorContextProvider from '../../contexts/CalculatorContext';

const Calculator = () => (
  <CalculatorWrapper className="calculator">
    <CalculatorContextProvider>
      <TotalLandsNeeded />
      <ManaInputs />
      <ResetButton />
    </CalculatorContextProvider>
  </CalculatorWrapper>
);

export default Calculator;
