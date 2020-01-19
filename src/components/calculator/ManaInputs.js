import React from 'react';
import styled from 'styled-components';
import ManaInput from './ManaInput';

import { CalculatorContext } from '../../contexts/CalculatorContext'

const ManaInputs = () => {

  return <CalculatorContext.Consumer>
    {(context) => {
      const { manaColors } = context;
      return (
        <StyledManaInputs>
          {manaColors.map(manaColor => (
            <ManaInput key={manaColor.id} manaColor={manaColor} />
          ))}
        </StyledManaInputs>
      )
    }}
  </CalculatorContext.Consumer>

}

export default ManaInputs

const StyledManaInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;