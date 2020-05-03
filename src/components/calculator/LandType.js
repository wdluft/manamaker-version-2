import React from 'react';
import PropTypes from 'prop-types';

const LandType = ({ manaColor }) => (
  <p>
    {manaColor.sourcesNeeded} {manaColor.landType}
  </p>
);

export default LandType;

LandType.propTypes = {
  manaColor: PropTypes.object.isRequired,
};
