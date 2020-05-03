import React, { useContext } from 'react';
import ManaInput from './ManaInput';
import { ManaInputsWrapper } from '../elements/CalculatorStyles';
import { CalculatorContext } from '../../contexts/CalculatorContext';

const ManaInputs = () => {
  const { manaColors } = useContext(CalculatorContext);
  return (
    <ManaInputsWrapper>
      {manaColors.map(manaColor => (
        <ManaInput key={manaColor.id} manaColor={manaColor} />
      ))}
    </ManaInputsWrapper>
  );
};

export default ManaInputs;
