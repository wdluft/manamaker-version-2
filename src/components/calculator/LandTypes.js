import React, { useContext } from 'react';
import styled from 'styled-components';
import LandType from './LandType';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const LandTypes = () => {
  const { manaColors } = useContext(CalculatorContext);
  return (
    <StyledLands>
      {manaColors.map(color => (
        <LandType key={color.id} manaColor={color} />
      ))}
    </StyledLands>
  );
};

export default LandTypes;

const StyledLands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;
