import React from 'react'
import styled from 'styled-components';

// Component imports
import TotalLandsNeeded from './TotalLandsNeeded';
import ManaInputs from './ManaInputs';
import LandTypes from './LandTypes';

const Calculator = () => {
  return (
    <StyledCalculator>
      <TotalLandsNeeded />
      <ManaInputs />
      <LandTypes />
      <button>Reset</button>
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
  }
`;