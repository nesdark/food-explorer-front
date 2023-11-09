import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border: none;
  border-radius: 0.5rem;

  padding: 1.2rem 4.65rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
  color: ${({ theme }) => theme.COLORS.LIGHT};
`;
