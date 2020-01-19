import React from 'react'
import LandType from './LandType'
import styled from 'styled-components';

import { CalculatorContext } from '../../contexts/CalculatorContext'

const LandTypes = () => {

  return <CalculatorContext.Consumer>
    {(context) => {
      const { manaColors } = context;
      return (
        <StyledLands>
          {manaColors.map(color => (
            <LandType key={color.id} manaColor={color} />
          ))}
        </StyledLands>
      )
    }}
  </CalculatorContext.Consumer>

}

export default LandTypes

const StyledLands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;