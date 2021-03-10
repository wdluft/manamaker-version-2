import React from 'react';
import { FooterWrapper } from '../elements/FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <h6 className="footer__title">
      Made by{' '}
      <a href="https://willluft.com" rel="noopener noreferrer">
        Will Luft
      </a>
    </h6>
    <p>
      <a
        className="footer_twitterLink"
        href="https://twitter.com/iamwilldl"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
