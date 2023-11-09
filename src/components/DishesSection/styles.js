import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 4.7rem;

  margin-inline: clamp(2.4rem, 9.783vw - 1.787rem, 12.3rem);

  > h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: ${({ theme }) => theme.FONT.EXTRA_LARGE};
    font-weight: 500;
  }
`;
