import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input } from '../styledComponents/StyledInput';
import { Label } from '../styledComponents/StyledLabel';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const ManaInput = ({ manaColor }) => (
  <CalculatorContext.Consumer>
    {context => {
      const { updatePips } = context;

      return (
        <StyledManaInput>
          <Label htmlFor={manaColor.color}>{manaColor.color}</Label>
          <Input
            type="number"
            name={manaColor.color}
            id="color"
            min="0"
            value={manaColor.pips}
            step="1"
            max="150"
            onChange={updatePips}
          />
        </StyledManaInput>
      );
    }}
  </CalculatorContext.Consumer>
);

export default ManaInput;

ManaInput.propTypes = {
  manaColor: PropTypes.object.isRequired,
};

const StyledManaInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0;

    label {
      margin-right: 1.5rem;
    }
  }

  @media screen and (min-width: 500px) and (orientation: landscape) {
    margin-right: 3rem;
  }
`;
