import styled from 'styled-components';

export const Label = styled.label`
  text-transform: capitalize;
  line-height: var(--lineHeight);

  @media (min-width: 640px) {
    font-size: var(--heading5);
  }
`;
