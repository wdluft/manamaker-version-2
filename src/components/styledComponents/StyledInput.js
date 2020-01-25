import styled from 'styled-components';

export const Input = styled.input`
  border: none;

  font-size: 1.25rem;

  text-align: center;
  padding: 0.15rem 0;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;
