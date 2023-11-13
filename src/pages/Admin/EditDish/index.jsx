import { BsChevronLeft, BsUpload } from 'react-icons/bs';

import { Container, Main, Edit } from './styles.js';

import { Header } from '../../../components/Header/index.jsx';
import { Footer } from '../../../components/Footer/index.jsx';
import { TextButton } from '../../../components/TextButton/index.jsx';
import { Input } from '../../../components/Input/index.jsx';
import { LabelInput } from '../../../components/LabelInput/index.jsx';
import { Items } from '../../../components/Items/index.jsx';
import { Link } from 'react-router-dom';

export function EditDish() {
  return (
    <Container>
      <Header admin />

      <Main>
        <Link to="/">
          <TextButton icon={BsChevronLeft} size={32} title="voltar" />
        </Link>
        <h2>Editar prato</h2>
        <Edit>
          <div className="file">
            Imagem do prato
            <Input
              type="file"
              icon={BsUpload}
              label="Selecione a imagem"
              accept="image/*"
            />
          </div>
          <LabelInput
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            gray
          />
          <label>
            Categoria
            <select name="category" id="category">
              <option value="Refeição">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Bebidas">Bebidas</option>
            </select>
          </label>
          <div className="ingredients">
            Ingredientes
            <div>
              <Items value="Pão Naan" />
              <Items value="Pão Naan" />
              <Items value="Pão Naan" />
              <Items placeholder="Adicionar" $isNew />
            </div>
          </div>
          <LabelInput
            type="number"
            label="Preço"
            placeholder="R$ 00,00"
            gray
            className="price"
          />

          <label>
            Descrição
            <textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            ></textarea>
          </label>

          <div>
            <Link to="/">
              <button type="button">Excluir prato</button>
            </Link>
            <Link to="/">
              <button type="submit">Salvar alterações</button>
            </Link>
          </div>
        </Edit>
      </Main>

      <Footer />
    </Container>
  );
}
