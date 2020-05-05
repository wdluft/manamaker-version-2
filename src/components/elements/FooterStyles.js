import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: var(--bgColor);
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer__title {
    line-height: var(--lineHeight);
  }

  @media (min-width: 640px) {
    .footer__title {
      font-size: var(--heading5);
    }
  }
`;
