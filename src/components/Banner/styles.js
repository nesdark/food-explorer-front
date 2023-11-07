import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.div`
  width: min(112rem, 80vw);

  height: 26rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 9.2rem 10rem 9.2rem 0;

  border-radius: 0.8rem;

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

  @media (max-width: ${breakpoints.XL}) {
    padding: 9.2rem clamp(5rem, 5%, 10rem);

    h2 {
      font-size: clamp(1.8rem, 0.75rem + 2vw, 3rem);
    }
  }

  @media (max-width: ${breakpoints.LG}) {
    p {
      width: 23rem;
    }
  }

  @media (max-width: ${breakpoints.MD}) {
    height: auto;

    padding: 5.2rem 5rem 5.2rem 0;

    p {
      font-size: 1.3rem;
    }
  }
`;

export const Fruits = styled.div`
  > img {
    width: min(40vw, 65.6rem);
    height: min(25.12vw, 41.2rem);
  }

  position: absolute;
  left: -5.4rem;
  bottom: -1.4rem;

  @media (max-width: ${breakpoints.LG}) {
    > img {
      width: min(45vw, 40.8rem);
      height: min(30.12vw, 25.624rem);
    }

    left: -7vw;
  }

  @media (max-width: ${breakpoints.MD}) {
    > img {
      width: 25rem;
      height: 19.5rem;
    }

    bottom: 0;
  }
`;
