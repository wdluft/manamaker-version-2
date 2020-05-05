import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: var(--bgColor);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 85px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;

  .footer__title {
    line-height: var(--lineHeight);
  }
`;
