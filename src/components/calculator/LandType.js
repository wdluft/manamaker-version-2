import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LandType = ({ manaColor }) => (
  <StyledP>
    {manaColor.landType} Needed: {manaColor.sourcesNeeded}
  </StyledP>
);

export default LandType;

const StyledP = styled.p`
  font-size: 1.25rem;
`;

LandType.propTypes = {
  manaColor: PropTypes.object.isRequired,
};
