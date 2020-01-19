import React from 'react'
import LandType from './LandType'
import styled from 'styled-components';

const LandTypes = () => {
  return (
    <StyledLands>
      <LandType />
      <LandType />
      <LandType />
      <LandType />
      <LandType />
    </StyledLands>
  )
}

export default LandTypes

const StyledLands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;