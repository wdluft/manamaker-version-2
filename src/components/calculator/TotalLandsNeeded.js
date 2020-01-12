import React from 'react'
import styled from 'styled-components';
import { Input } from '../styledComponents/StyledInput';
import { Label } from '../styledComponents/StyledLabel';

const TotalLandsNeeded = () => {
  return (
    <StyledDiv>
      <Label htmlFor="landsNeeded">Lands Needed</Label>
      <Input type="number" name="landsNeeded" id="landsNeeded" min="0" value="0" />
    </StyledDiv>
  )
}

export default TotalLandsNeeded

const StyledDiv = styled.div`
  grid-column: 1/3;

  display: flex;
  flex-direction: column;
  align-items: center;
`;