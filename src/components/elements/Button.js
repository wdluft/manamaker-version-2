import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.25rem 2.5rem;
  border-radius: 23px;
  font-size: var(--bodyText);
  background: var(--purple);
  color: var(--white);
  border: none;

  &:hover {
    background: var(--lightPurp);
  }

  &:active {
    background: var(--darkPurp);
  }
`;
