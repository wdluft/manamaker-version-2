import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LandType = ({ manaColor }) => (
  <StyledP>
    {manaColor.landType}: {manaColor.sourcesNeeded}
  </StyledP>
);

export default LandType;

LandType.propTypes = {
  manaColor: PropTypes.object.isRequired,
};

const StyledP = styled.p`
  font-size: 1.5rem;

  @media screen and (min-width: 500px) and (orientation: portrait) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 500px) and (orientation: landscape) {
    font-size: 2rem;
    margin-left: 3rem;
  }
`;
