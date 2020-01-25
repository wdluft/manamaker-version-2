import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;

const StyledNav = styled.nav`
  font-size: 1.25rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      margin: 0 25px;
    }
  }

  @media (min-width: 500px) {
    font-size: 1.75rem;
  }

  @media (min-width: 750px) {
    font-size: 2rem;
  }
`;
