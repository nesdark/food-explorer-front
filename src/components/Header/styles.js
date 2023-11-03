import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.header`
  min-height: 10.4rem;

  padding-inline: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  width: 100%;

  Button {
    max-width: max-content;
  }
`;

export const Logo = styled.h1`
  min-width: max-content;

  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: ${({ theme }) => theme.FONT.LARGE};
  color: ${({ theme }) => theme.COLORS.LIGHT};
`;

export const Logout = styled.button`
  background: none;
  border: none;

  font-size: 2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT};
`;
