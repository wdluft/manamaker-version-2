import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from '../elements/HeaderStyles';

const Nav = () => (
  <NavWrapper className="nav">
    <ul className="nav__links">
      <li className="nav__link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav__link">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </NavWrapper>
);

export default Nav;
