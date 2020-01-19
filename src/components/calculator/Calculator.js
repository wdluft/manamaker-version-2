import React from 'react'
import styled from 'styled-components';

// Component imports
import TotalLandsNeeded from './TotalLandsNeeded';
import ManaInputs from './ManaInputs';
import LandTypes from './LandTypes';
import CalculatorContextProvider from '../../contexts/CalculatorContext'

const Calculator = () => {
  return (
    <StyledCalculator>
      <CalculatorContextProvider>
        <TotalLandsNeeded />
        <ManaInputs />
        <LandTypes />
        <button>Reset</button>
      </CalculatorContextProvider>
    </StyledCalculator>
  )
}

export default Calculator

const StyledCalculator = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  button {
    grid-column: 1/3;
    margin: 2rem auto 0;
    width: 50%;
    padding: 0.75rem;
    font-size: 1.25rem;
  }
`;