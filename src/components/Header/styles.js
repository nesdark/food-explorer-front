import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.header`
  width: 100%;
  min-height: 10.4rem;

  padding-inline: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > h2 {
    font-size: 2.1rem;
    font-weight: 400;
  }

  Button {
    max-width: max-content;

    div {
      width: max-content;
    }
  }

  @media (max-width: ${breakpoints.MD}) {
    justify-content: space-between;

    &.admin > button:not(.open-menu, .close-menu) {
      visibility: hidden;
      opacity: 0;

      width: 1px;
      padding: 0;
    }

    > :last-child {
      display: none;
    }

    > button.open-menu {
      display: block;
    }

    &.menu-active .open-menu,
    > h2,
    > label,
    &.menu-active > h1,
    &.menu-active > button {
      display: none;
    }

    .open-menu,
    &.menu-active .close-menu,
    &.menu-active > h2 {
      display: block;
    }
  }

  /* MENU */
  .open-menu,
  .close-menu,
  > h2 {
    display: none;
  }

  &.menu-active {
    justify-content: left;
  }

  &.menu-active > .menu {
    display: flex;

    position: fixed;
    top: 10.4rem;
    left: 0;
  }
`;

export const Menu = styled.ul`
  grid-area: MAIN;

  width: 100%;
  height: calc(100vh - 9.3rem - 10.4rem);

  display: none;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 2.4.8rem;

  > label {
    margin-bottom: 3.6rem;
  }

  > li {
    padding: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;
