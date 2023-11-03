import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.label`
  cursor: pointer;

  width: 100%;

  display: flex;
  align-self: center;
  justify-content: center;
  gap: 1.4rem;

  border-radius: 0.5rem;

  padding: 1.6rem 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
    width: 100%;
    max-width: 34.4rem;

    border: none;
    background: none;

    font-size: ${({ theme }) => theme.FONT.SMALL};

    color: ${({ theme }) => theme.COLORS.LIGHT};

    :placeholder-shown {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
