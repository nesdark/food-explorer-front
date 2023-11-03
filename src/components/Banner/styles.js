import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.div`
  width: min(112rem, 80vw);

  height: 26rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 9.2rem 10rem;

  margin: 16.4rem auto 6.2rem;

  background: ${({ theme }) => theme.COLORS.BANNER_GRADIENT};

  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-weight: 500;
    font-size: ${({ theme }) => theme.FONT.EXTRA_LARGE};

    margin-bottom: 0.8rem;
  }

  p {
    font-size: ${({ theme }) => theme.FONT.SMALL};
  }
`;

export const Fruits = styled.div`
  width: 65.6rem;
  height: 41.2rem;

  position: absolute;
  left: -5.4rem;
  bottom: -1.4rem;
`;
