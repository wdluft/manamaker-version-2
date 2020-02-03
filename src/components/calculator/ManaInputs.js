import React, { useContext } from 'react';
import styled from 'styled-components';
import ManaInput from './ManaInput';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const ManaInputs = () => {
  const { manaColors } = useContext(CalculatorContext);
  return (
    <StyledManaInputs>
      {manaColors.map(manaColor => (
        <ManaInput key={manaColor.id} manaColor={manaColor} />
      ))}
    </StyledManaInputs>
  );
};

export default ManaInputs;

const StyledManaInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
