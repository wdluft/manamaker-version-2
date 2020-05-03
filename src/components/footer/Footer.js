import React from 'react';
import { FooterWrapper } from '../elements/FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <h5 className="footer__title">
      Made by{' '}
      <a href="https://willluft" target="_blank" rel="noopener noreferrer">
        Will Luft
      </a>
    </h5>
    <p>
      <a
        className="footer_twitterLink"
        href="https://twitter.com/iamwilldl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
