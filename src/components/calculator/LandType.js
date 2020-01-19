import React from 'react'
import styled from 'styled-components';

const LandType = ({ manaColor }) => {
  return (
    <StyledP>
      {manaColor.landType} Needed: {manaColor.sourcesNeeded}
    </StyledP>
  )
}

export default LandType

const StyledP = styled.p`
  font-size: 1.25rem;
`;