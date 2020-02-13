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
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 95px;

  button {
    grid-column: 1/3;
    margin: 1rem auto 0;
    width: 33%;
    padding: 0.5rem;
    font-size: 1.5rem;
    background: #ccc;
    box-shadow: inset 0 1px 0 #ffffff, 0 2px 2px #444444;

    &:focus {
      box-shadow: inset 0 1px 0 #ffffff;
      outline: none;
    }
  }

  @media (min-width: 500px) {
    button {
      font-size: 1.5rem;
    }
  }
`;
