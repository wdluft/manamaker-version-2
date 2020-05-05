import styled from 'styled-components';

export const Input = styled.input`
  border: 3px solid var(--black);
  border-radius: 23px;
  background: var(--gray);
  font-size: var(--bodyText);
  line-height: var(--lineHeight);
  color: var(--white);
  text-align: center;
  padding: 0 2rem;

  &:active {
    border-color: var(--green);
  }

  &:focus {
    border-color: var(--green);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 640px) {
    font-size: var(--heading5);
  }
`;
