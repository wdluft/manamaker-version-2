import React from 'react';

// Component imports
import TotalLandsNeeded from './TotalLandsNeeded';
import ManaInputs from './ManaInputs';
import ResetButton from './ResetButton';
import { CalculatorWrapper } from '../elements/CalculatorStyles';
import CalculatorContextProvider from '../../contexts/CalculatorContext';

const Calculator = () => (
  <CalculatorWrapper
    className="calculator"
    initial={{ x: '-100%' }}
    animate={{ x: 0 }}
    exit={{ opacity: '-100%' }}
    transition={{ damping: 300, duration: 0.5 }}
  >
    <CalculatorContextProvider>
      <TotalLandsNeeded />
      <ManaInputs />
      <ResetButton />
    </CalculatorContextProvider>
  </CalculatorWrapper>
);

export default Calculator;
