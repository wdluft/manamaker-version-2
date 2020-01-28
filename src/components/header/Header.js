import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => (
  <StyledHeader>
    <h1>ManaMaker</h1>
    <Nav />
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  margin: 10px auto 10px;
  text-align: center;

  h1 {
    font-size: 2.75rem;
    font-family: var(--header-font);
    font-weight: normal;
    letter-spacing: 0.25rem;
  }

  @media (min-width: 500px) {
    margin: 15px auto 15px;

    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 750px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
