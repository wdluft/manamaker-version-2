import styled from 'styled-components';

export const Input = styled.input`
  border: none;

  font-size: 1.5rem;

  text-align: center;
  padding: 0.15rem 0;
  background-color: #ccc;

  box-shadow: 0 3px 0 #ffffff, inset 0 2px 2px #444444;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 3px 0 var(--color-one), inset 0 2px 2px #444444;
  }

  @media screen and (min-width: 500px) and (orientation: portrait) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 500px) and (orientation: landscape) {
    font-size: 2rem;
  }
`;
