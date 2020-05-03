import React from 'react';

// Component imports
import TotalLandsNeeded from './TotalLandsNeeded';
import ManaInputs from './ManaInputs';
import LandTypes from './LandTypes';
import ResetButton from './ResetButton';
import { CalculatorWrapper } from '../elements/CalculatorStyles';
import CalculatorContextProvider from '../../contexts/CalculatorContext';

const Calculator = () => (
  <CalculatorWrapper>
    <CalculatorContextProvider>
      <TotalLandsNeeded />
      <ManaInputs />
      <LandTypes />
      <ResetButton />
    </CalculatorContextProvider>
  </CalculatorWrapper>
);

export default Calculator;
