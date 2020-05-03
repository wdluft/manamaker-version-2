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
`;

export const NavWrapper = styled.nav`
  .nav__links {
    list-style: none;
    display: flex;
    justify-content: center;

    .nav__link {
      margin: 0 18px;
      font-size: var(--heading5);
    }
  }
`;
