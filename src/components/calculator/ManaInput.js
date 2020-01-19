import React from 'react';
import styled from 'styled-components';
import { Input } from '../styledComponents/StyledInput';
import { Label } from '../styledComponents/StyledLabel';

const ManaInput = () => {
  return (
    <StyledManaInput>
      <Label htmlFor="color">Color</Label>
      <Input type="number" name="color" id="color" min="0" value="0" step='1' max='150' />
    </StyledManaInput>
  )
}

export default ManaInput

const StyledManaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;