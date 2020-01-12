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
  margin: 10px auto 10px;
  text-align: center;
  border-bottom: 5px solid var(--color-one);
  
  h1 {
    font-size: 2.75rem;
  }
`;