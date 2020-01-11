import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <StyledHeader>
      <h1>ManaMaker</h1>
      <Nav />
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  max-width: 1100px;
  margin: 75px auto 0;
  text-align: center;
  
  h1 {
    font-size: 5rem;
  }
`;