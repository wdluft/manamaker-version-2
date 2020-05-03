import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../elements/Input';
import { Label } from '../elements/Label';
import { ManaInputWrapper } from '../elements/CalculatorStyles';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const ManaInput = ({ manaColor }) => {
  const { updatePips } = useContext(CalculatorContext);

  return (
    <ManaInputWrapper>
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
    </ManaInputWrapper>
  );
};

ManaInput.propTypes = {
  manaColor: PropTypes.object.isRequired,
};

export default ManaInput;
