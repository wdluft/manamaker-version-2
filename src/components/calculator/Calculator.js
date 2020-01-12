import React from 'react'
import styled from 'styled-components';

// Component imports
import TotalLandsNeeded from './TotalLandsNeeded';
import ManaInput from './ManaInput';
import LandType from './LandType';

const Calculator = () => {
  return (
    <StyledCalculator>
      <TotalLandsNeeded />
      <ManaInput />
      <LandType />
      <ManaInput />
      <LandType />
      <ManaInput />
      <LandType />
      <ManaInput />
      <LandType />
      <ManaInput />
      <LandType />
      <button>Reset</button>
    </StyledCalculator>
  )
}

export default Calculator

const StyledCalculator = styled.section`
  margin-top: 25px;
  max-width: 750px;
  background: var(--color-one);
  color: var(--dark-color)
`;