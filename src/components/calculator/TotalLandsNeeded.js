import React, { useContext } from 'react';
import { Input } from '../elements/Input';
import { Label } from '../elements/Label';
import { LandsNeededWrapper } from '../elements/CalculatorStyles';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const TotalLandsNeeded = () => {
  const { totalLands, updateLands } = useContext(CalculatorContext);
  return (
    <LandsNeededWrapper>
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
    </LandsNeededWrapper>
  );
};

export default TotalLandsNeeded;
