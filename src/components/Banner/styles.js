import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.div`
  width: min(112rem, 80vw);

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: clamp(3.6rem, 5.04vw + 1.443rem, 8.7rem)
    clamp(0.8rem, 9.091vw - 3.091rem, 10rem)
    clamp(2.2rem, 6.917vw - 0.76rem, 9.2rem)
    clamp(15.3rem, 44.17vw - 3.605rem, 60rem);

  border-radius: 0.8rem;

  margin: 16.4rem auto 6.2rem;

  background: ${({ theme }) => theme.COLORS.BANNER_GRADIENT};

  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-weight: 500;
    font-size: clamp(1.8rem, 2.174vw + 0.87rem, 4rem);

    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(1.2rem, 0.395vw + 1.031rem, 1.6rem);
  }

  /* @media (max-width: ${breakpoints.XL}) {
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
  } */
`;

export const Fruits = styled.div`
  > img {
    width: clamp(19.1rem, 45.949vw - 0.566rem, 65.6rem);
    height: clamp(14.9rem, 25.988vw + 3.777rem, 41.2rem);
  }

  position: absolute;
  right: clamp(21.5rem, 32.312vw + 7.67rem, 54.2rem);
  bottom: -1.4rem;

  @media (max-width: ${breakpoints.MD}) {
    bottom: 0;
  }
`;