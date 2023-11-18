import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { api } from '../../../services/api.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Main } from './styles';
import { Header } from '../../../components/Header';
import { Banner } from '../../../components/Banner';
import { Dish } from '../../../components/Dish';
import { DishesSection } from '../../../components/DishesSection';
import { Footer } from '../../../components/Footer';

export function Home() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductsBySearch() {
      const response = await api.get(`/products?search=${search}`);
      setProducts(response.data);
    }

    async function fetchProductsByCategory() {
      const response = await api.get(`/products?returnAll=true`);
      setProducts(response.data);
    }

    if (search.trim() == '') {
      fetchProductsByCategory();
    } else {
      fetchProductsBySearch();
    }
  }, [search]);

  function handleDetails(id) {
    navigate(`/dish/${id}`);
  }

  return (
    <Container>
      <Header search={setSearch} />
      <Main>
        <Banner />
        <DishesSection>
          <h2>Refeições</h2>
          <Swiper
            grabCursor={true}
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 27,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((product) => {
              if (product.category === 'meals') {
                return (
                  <SwiperSlide>
                    <Dish
                      key={String(product.id)}
                      id={product.id}
                      imgSource={`${api.defaults.baseURL}/files/${product.image}`}
                      name={product.title}
                      description={product.description}
                      price={product.price}
                      handleDetails={handleDetails}
                    />
                  </SwiperSlide>
                );
              } else {
                return '';
              }
            })}
          </Swiper>
        </DishesSection>
        <DishesSection>
          <h2>Sobremesas</h2>
          <Swiper
            grabCursor={true}
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 27,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((product) => {
              if (product.category === 'dessert') {
                return (
                  <SwiperSlide>
                    <Dish
                      key={String(product.id)}
                      id={product.id}
                      imgSource={`${api.defaults.baseURL}/files/${product.image}`}
                      name={product.title}
                      description={product.description}
                      price={product.price}
                      handleDetails={handleDetails}
                    />
                  </SwiperSlide>
                );
              } else {
                return '';
              }
            })}
          </Swiper>
        </DishesSection>
        <DishesSection>
          <h2>Bebidas</h2>
          <Swiper
            grabCursor={true}
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 27,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((product) => {
              if (product.category === 'drinks') {
                return (
                  <SwiperSlide>
                    <Dish
                      key={String(product.id)}
                      id={product.id}
                      imgSource={`${api.defaults.baseURL}/files/${product.image}`}
                      name={product.title}
                      description={product.description}
                      price={product.price}
                      handleDetails={handleDetails}
                    />
                  </SwiperSlide>
                );
              } else {
                return '';
              }
            })}
          </Swiper>
        </DishesSection>
      </Main>
      <Footer />
    </Container>
  );
}
