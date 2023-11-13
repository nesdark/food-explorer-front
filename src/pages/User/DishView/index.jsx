import { BsChevronLeft } from 'react-icons/bs';

import { Container, Main, Info, Ingredients } from './styles';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TextButton } from '../../../components/TextButton';
import { BuyOptions } from '../../../components/BuyOptions';
import { Tag } from '../../../components/Tag';
import { Link } from 'react-router-dom';

export function DishView() {
  return (
    <Container>
      <Header />
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
            <BuyOptions />
          </Info>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
