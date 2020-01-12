import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </StyledNav>
  )
}

export default Nav


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