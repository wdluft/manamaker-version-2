import React, { useContext } from 'react';
import { Input } from '../elements/Input';
import { Label } from '../elements/Label';
import { InputGroup } from '../elements/CalculatorStyles';

import { CalculatorContext } from '../../contexts/CalculatorContext';

const TotalLandsNeeded = () => {
  const { totalLands, updateLands } = useContext(CalculatorContext);
  return (
    <InputGroup className="landsNeeded">
      <Label htmlFor="landsNeeded" className="landsNeeded__label">
        Lands Needed
      </Label>
      <Input
        className="landsNeeded__input"
        type="number"
        name="landsNeeded"
        id="landsNeeded"
        min="0"
        max="100"
        value={totalLands}
        step="1"
        onChange={updateLands}
      />
    </InputGroup>
  );
};

export default TotalLandsNeeded;
