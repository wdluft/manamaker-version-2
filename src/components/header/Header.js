import React from 'react';
import Nav from './Nav';
import { HeaderWrapper } from '../elements/HeaderStyles';

const Header = () => (
  <HeaderWrapper>
    <h1 className="header__title">ManaMaker</h1>
    <Nav />
  </HeaderWrapper>
);

export default Header;
