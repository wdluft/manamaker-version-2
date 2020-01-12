import React from 'react'
import { Input } from '../styledComponents/StyledInput';
import { Label } from '../styledComponents/StyledLabel';

const TotalLandsNeeded = () => {
  return (
    <div>
      <Label htmlFor="landsNeeded">Lands Needed</Label>
      <Input type="number" name="landsNeeded" id="landsNeeded" min="0" value="0" />
    </div>
  )
}

export default TotalLandsNeeded
