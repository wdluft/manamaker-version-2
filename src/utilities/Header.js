import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>ManaMaker</h1>
      <StyledNav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </StyledNav>
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

const StyledNav = styled.nav`
  font-size: 2rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      margin: 0 25px;
    }
  }
`;