import styled from 'styled-components';

export const Input = styled.input`
  border: none;

  font-size: 1.5rem;

  text-align: center;
  padding: 0.15rem 0;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 500px) and (orientation: portrait) {
    font-size: 2.5rem;
  }
`;
