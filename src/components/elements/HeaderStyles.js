import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .header__title {
    font-size: var(--heading2);
  }

  @media (min-width: 640px) {
    .header__title {
      font-size: var(--heading1);
    }
  }
`;

export const NavWrapper = styled.nav`
  .nav__links {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .nav__link {
    margin: 0 18px;
    font-size: var(--heading5);
  }

  @media (min-width: 640px) {
    .nav__link {
      font-size: var(--heading4);
    }
  }
`;
