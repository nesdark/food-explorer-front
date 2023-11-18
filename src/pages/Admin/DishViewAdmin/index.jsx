import { BsChevronLeft } from 'react-icons/bs';

import { Link, useParams } from 'react-router-dom';
import { api } from '../../../services/api';
import { useState, useEffect } from 'react';

import { Container, Main, Info, Ingredients } from './styles';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TextButton } from '../../../components/TextButton';
import { Button } from '../../../components/Button';
import { Tag } from '../../../components/Tag';

export function DishViewAdmin() {
  const [data, setData] = useState(null);

  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }
    fetchDish();
  }, []);

  return (
    <Container>
      <Header admin />
      {data && (
        <Main>
          <Link to="/">
            <TextButton icon={BsChevronLeft} size={32} title="voltar" />
          </Link>
          <div>
            <img
              src={`${api.defaults.baseURL}/files/${data.image}`}
              alt="Imagem do prato"
            />
            <Info>
              <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <Ingredients>
                  {data.ingredients.map((ingredient) => (
                    <Tag title={ingredient.name} />
                  ))}
                </Ingredients>
              </div>
              <Link to={`/dish/update/${params.id}`}>
                <Button title="Editar prato" />
              </Link>
            </Info>
          </div>
        </Main>
      )}
      <Footer />
    </Container>
  );
}
