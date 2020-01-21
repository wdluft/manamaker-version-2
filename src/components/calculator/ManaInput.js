import React from 'react';
import styled from 'styled-components';
import { Input } from '../styledComponents/StyledInput';
import { Label } from '../styledComponents/StyledLabel';

import { CalculatorContext } from '../../contexts/CalculatorContext'

const ManaInput = ({ manaColor }) => {

  return <CalculatorContext.Consumer>
    {(context) => {
      const { updatePips } = context;

      return (
        <StyledManaInput>
          <Label htmlFor={manaColor.color}>{manaColor.color}</Label>
          <Input type="number" name={manaColor.color} id="color" min="0" value={manaColor.pips} step='1' max='150' onChange={updatePips}/>
        </StyledManaInput>
      )
    }}
  </CalculatorContext.Consumer>

}

export default ManaInput

const StyledManaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;