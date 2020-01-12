import React, { Fragment } from 'react';
import { Input } from '../styledComponents/StyledInput';
import { Label } from '../styledComponents/StyledLabel';

const ManaInput = () => {
  return (
    <Fragment>
      <Label htmlFor="color">Color</Label>
      <Input type="number" name="color" id="color" min="0" value="0" />
    </Fragment>
  )
}

export default ManaInput
