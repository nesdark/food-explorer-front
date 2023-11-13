import { Container, Main, DishesCarousel, AreaLeft, AreaRight } from './styles';
import { Header } from '../../../components/Header';
import { Banner } from '../../../components/Banner';
import { Dish } from '../../../components/Dish';
import { DishesSection } from '../../../components/DishesSection';
import { Footer } from '../../../components/Footer';

import { useRef } from 'react';

export function HomeAdmin() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault;
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault;
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <Header admin />
      <Main>
        <Banner />
        <DishesSection>
          <h2>Refeições</h2>
          <DishesCarousel ref={carousel}>
            <AreaLeft>
              <button onClick={handleLeftClick}>
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8839 0.616117C15.372 1.10427 15.372 1.89573 14.8839 2.38388L3.26777 14L14.8839 25.6161C15.372 26.1043 15.372 26.8957 14.8839 27.3839C14.3957 27.872 13.6043 27.872 13.1161 27.3839L0.616117 14.8839C0.127961 14.3957 0.127961 13.6043 0.616117 13.1161L13.1161 0.616117C13.6043 0.127961 14.3957 0.127961 14.8839 0.616117Z"
                    fill="white"
                  />
                </svg>
              </button>
            </AreaLeft>
            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              id={4}
              admin
            />
            <Dish
              imgSource="parma"
              name="Torradas de Parma"
              description="Presunto de parma e rúcula em um pão com fermentação natural."
              price="25.97"
              id={4}
              admin
            />
            <Dish
              imgSource="parma"
              name="Torradas de Parma"
              description="Presunto de parma e rúcula em um pão com fermentação natural."
              price="25.97"
              id={4}
              admin
            />
            <Dish
              imgSource="parma"
              name="Torradas de Parma"
              description="Presunto de parma e rúcula em um pão com fermentação natural."
              price="25.97"
              id={4}
              admin
            />
            <AreaRight>
              <button onClick={handleRightClick}>
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.1166 0.616117C1.60476 0.127961 2.39622 0.127961 2.88437 0.616117L15.3844 13.1161C15.8725 13.6043 15.8725 14.3957 15.3844 14.8839L2.88437 27.3839C2.39622 27.872 1.60476 27.872 1.1166 27.3839C0.628449 26.8957 0.628449 26.1043 1.1166 25.6161L12.7327 14L1.1166 2.38388C0.628449 1.89573 0.628449 1.10427 1.1166 0.616117Z"
                    fill="white"
                  />
                </svg>
              </button>
            </AreaRight>
          </DishesCarousel>
        </DishesSection>
        <DishesSection>
          <h2>Sobremesas</h2>

          <DishesCarousel ref={carousel}>
            <AreaLeft>
              <button onClick={handleLeftClick}>
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8839 0.616117C15.372 1.10427 15.372 1.89573 14.8839 2.38388L3.26777 14L14.8839 25.6161C15.372 26.1043 15.372 26.8957 14.8839 27.3839C14.3957 27.872 13.6043 27.872 13.1161 27.3839L0.616117 14.8839C0.127961 14.3957 0.127961 13.6043 0.616117 13.1161L13.1161 0.616117C13.6043 0.127961 14.3957 0.127961 14.8839 0.616117Z"
                    fill="white"
                  />
                </svg>
              </button>
            </AreaLeft>

            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />
            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />
            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />
            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />

            <AreaRight>
              <button onClick={handleRightClick}>
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.1166 0.616117C1.60476 0.127961 2.39622 0.127961 2.88437 0.616117L15.3844 13.1161C15.8725 13.6043 15.8725 14.3957 15.3844 14.8839L2.88437 27.3839C2.39622 27.872 1.60476 27.872 1.1166 27.3839C0.628449 26.8957 0.628449 26.1043 1.1166 25.6161L12.7327 14L1.1166 2.38388C0.628449 1.89573 0.628449 1.10427 1.1166 0.616117Z"
                    fill="white"
                  />
                </svg>
              </button>
            </AreaRight>
          </DishesCarousel>
        </DishesSection>
        <DishesSection>
          <h2>Bebidas</h2>

          <DishesCarousel ref={carousel}>
            <AreaLeft>
              <button onClick={handleLeftClick}>
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8839 0.616117C15.372 1.10427 15.372 1.89573 14.8839 2.38388L3.26777 14L14.8839 25.6161C15.372 26.1043 15.372 26.8957 14.8839 27.3839C14.3957 27.872 13.6043 27.872 13.1161 27.3839L0.616117 14.8839C0.127961 14.3957 0.127961 13.6043 0.616117 13.1161L13.1161 0.616117C13.6043 0.127961 14.3957 0.127961 14.8839 0.616117Z"
                    fill="white"
                  />
                </svg>
              </button>
            </AreaLeft>

            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />
            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />
            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />
            <Dish
              imgSource="gambe"
              name="Spaguetti Gambe"
              description="Massa fresca com camarões pesto."
              price="49.97"
              admin
            />

            <AreaRight>
              <button onClick={handleRightClick}>
                <svg
                  width="16"
                  height="28"
                  viewBox="0 0 16 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.1166 0.616117C1.60476 0.127961 2.39622 0.127961 2.88437 0.616117L15.3844 13.1161C15.8725 13.6043 15.8725 14.3957 15.3844 14.8839L2.88437 27.3839C2.39622 27.872 1.60476 27.872 1.1166 27.3839C0.628449 26.8957 0.628449 26.1043 1.1166 25.6161L12.7327 14L1.1166 2.38388C0.628449 1.89573 0.628449 1.10427 1.1166 0.616117Z"
                    fill="white"
                  />
                </svg>
              </button>
            </AreaRight>
          </DishesCarousel>
        </DishesSection>
      </Main>
      <Footer />
    </Container>
  );
}
