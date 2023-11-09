import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  > *:not(section) {
    margin-inline: clamp(2.4rem, 9.783vw - 1.787rem, 12.3rem);
  }
`;

export const DishesCarousel = styled.div`
  display: flex;
  gap: 2.7rem;
  overflow-x: auto;
  scroll-behavior: smooth;

  position: relative;
`;

export const AreaLeft = styled.div`
  width: 27.8rem;
  height: 100%;

  display: flex;
  justify-content: left;
  align-items: center;

  padding-inline: 1.9rem;

  background: linear-gradient(270deg, rgba(0, 10, 15, 0.27) 0%, #000a0f 100%);

  position: absolute;
  left: -1px;
  z-index: 100;
`;

export const AreaRight = styled.div`
  width: 27.8rem;
  height: 100%;

  display: flex;
  justify-content: right;
  align-items: center;

  padding-inline: 1.9rem;

  background: linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000a0f 100%);
  position: absolute;
  top: 0;
  right: -1px;
  z-index: 100;

  button {
  }
`;
