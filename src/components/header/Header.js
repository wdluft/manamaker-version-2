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
  
  h1 {
    font-size: 2.75rem;
  }

  @media (min-width: 500px) {
    margin: 50px auto 25px;

    h1 {
      font-size: 4rem;
    }
  }
  
  @media (min-width: 750px) {
    h1 {
      font-size: 5rem;
    }
  }
`;