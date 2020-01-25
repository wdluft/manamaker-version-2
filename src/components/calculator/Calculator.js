import React from 'react';
import styled from 'styled-components';

// Component imports
import TotalLandsNeeded from './TotalLandsNeeded';
import ManaInputs from './ManaInputs';
import LandTypes from './LandTypes';
import ResetButton from './ResetButton';
import CalculatorContextProvider from '../../contexts/CalculatorContext';

const Calculator = () => (
  <StyledCalculator>
    <CalculatorContextProvider>
      <TotalLandsNeeded />
      <ManaInputs />
      <LandTypes />
      <ResetButton />
    </CalculatorContextProvider>
  </StyledCalculator>
);

export default Calculator;

const StyledCalculator = styled.section`
  max-width: 750px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  button {
    grid-column: 1/3;
    margin: 2rem auto 0;
    width: 50%;
    padding: 0.5rem;
    font-size: 1.25rem;
  }
`;
