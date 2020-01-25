import styled from 'styled-components';

export const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.5rem;

  @media screen and (min-width: 500px) and (orientation: portrait) {
    font-size: 2.5rem;
  }
`;
