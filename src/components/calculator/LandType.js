import React from 'react';
import PropTypes from 'prop-types';

const LandType = ({ manaColor }) => (
  <p>
    {manaColor.landType}: {manaColor.sourcesNeeded}
  </p>
);

export default LandType;

LandType.propTypes = {
  manaColor: PropTypes.object.isRequired,
};
