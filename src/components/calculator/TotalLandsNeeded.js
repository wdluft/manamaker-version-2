import React, { useContext } from 'react';
import styled from 'styled-components';
import { Input } from '../styledComponents/StyledInput';
import { Label } from '../styledComponents/StyledLabel';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const TotalLandsNeeded = () => {
  const { totalLands, updateLands } = useContext(CalculatorContext);
  return (
    <StyledDiv>
      <Label htmlFor="landsNeeded">Lands Needed</Label>
      <Input
        type="number"
        name="landsNeeded"
        id="landsNeeded"
        min="0"
        max="100"
        value={totalLands}
        step="1"
        onChange={updateLands}
      />
    </StyledDiv>
  );
};

export default TotalLandsNeeded;

const StyledDiv = styled.div`
  grid-column: 1/3;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
