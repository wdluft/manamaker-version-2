import styled from 'styled-components';

export const Input = styled.input`
  background: var(--dark-color);
  color: var(--light-color);
  border: none;

  text-align: center;
  width: 50%;
  padding: 0.15rem 0;

  &:active {
    border: none;
  }

  &:focus {
    outline: none;
  }
`;
