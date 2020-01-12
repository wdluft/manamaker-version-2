import React from 'react';
import styled from 'styled-components';
import ManaInput from './ManaInput';

const ManaInputs = () => {
  return (
    <StyledManaInputs>
      <ManaInput />
      <ManaInput />
      <ManaInput />
      <ManaInput />
      <ManaInput />
    </StyledManaInputs>
  )
}

export default ManaInputs

const StyledManaInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;