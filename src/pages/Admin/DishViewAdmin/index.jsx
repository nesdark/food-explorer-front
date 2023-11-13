import { BsChevronLeft } from 'react-icons/bs';

import { Container, Main, Info, Ingredients } from './styles';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TextButton } from '../../../components/TextButton';
import { Button } from '../../../components/Button';
import { Tag } from '../../../components/Tag';
import { Link } from 'react-router-dom';

export function DishViewAdmin() {
  const id = 1;

  return (
    <Container>
      <Header admin />
      <Main>
        <Link to="/">
          <TextButton icon={BsChevronLeft} size={32} title="voltar" />
        </Link>
        <div>
          <img src="../../../public/salad.png" alt="" />
          <Info>
            <div>
              <h2>Salada Ravanello</h2>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim.
              </p>
              <Ingredients>
                <Tag title="alface" />
                <Tag title="cebola" />
                <Tag title="pão naan" />
                <Tag title="pepino" />
                <Tag title="rabanete" />
                <Tag title="tomate" />
              </Ingredients>
            </div>
            <Link to={`/dish/update/${id}`}>
              <Button title="Editar prato" />
            </Link>
          </Info>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
