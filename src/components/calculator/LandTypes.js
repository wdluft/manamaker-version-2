import React, { useContext } from 'react';
import LandType from './LandType';
import { LandTypesWrapper } from '../elements/CalculatorStyles';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const LandTypes = () => {
  const { manaColors } = useContext(CalculatorContext);
  return (
    <LandTypesWrapper>
      {manaColors.map(color => (
        <LandType key={color.id} manaColor={color} />
      ))}
    </LandTypesWrapper>
  );
};

export default LandTypes;
