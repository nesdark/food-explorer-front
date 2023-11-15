import { useState } from 'react';

import { api } from '../../../services/api.js';

import { BsChevronLeft, BsUpload } from 'react-icons/bs';

import { Container, Main, Edit } from './styles.js';

import { Header } from '../../../components/Header/index.jsx';
import { Footer } from '../../../components/Footer/index.jsx';
import { TextButton } from '../../../components/TextButton/index.jsx';
import { Input } from '../../../components/Input/index.jsx';
import { LabelInput } from '../../../components/LabelInput/index.jsx';
import { Items } from '../../../components/Items/index.jsx';
import { useNavigate, Link } from 'react-router-dom';

export function CreateDish() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const [category, setCategory] = useState('');

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const [dishImage, setDishImage] = useState(null);
  const [dishImageFile, setDishImageFile] = useState(null);

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleAddItem() {
    setItems((prevState) => [...prevState, newItem]);
    setNewItem('');
  }

  function handleRemoveItem(itemToDelete) {
    setItems((prevState) =>
      prevState.filter((item, index) => index !== itemToDelete)
    );
  }

  async function handleNewProduct(e) {
    e.preventDefault();

    if (!title) {
      return alert('Digite o nome do prato.');
    }

    if (category == '') {
      return alert('Por favor preencha o campo de categoria');
    }

    if (newItem) {
      return alert(
        'Você deixou um ingrediente no campo de adicionar, porém não a adicionou. Apague o ingrediente ou adicione-o'
      );
    }

    if (items.length === 0) {
      return alert('Por favor adicione um ou mais ingredientes.');
    }

    if (!title) {
      return alert('Digite o preço do produto');
    }

    if (!description) {
      return alert('Digite o preço do produto');
    }

    const response = await api.post('/products/create', {
      title,
      price,
      description,
      ingredients: items,
      category,
      image: 'image-url',
    });

    console.log({ dishImageFile });

    await api.patch(`/products/image/${response.data.id}`, { dishImageFile });

    alert('Prato criada com sucesso!');
    navigate('/');
  }

  function handleChangeDishImage(event) {
    const file = event.target.files[0];
    setDishImageFile(file.name);

    const imagePreview = URL.createObjectURL(file);
    setDishImage(imagePreview);
  }

  return (
    <Container>
      <Header admin />

      <Main>
        <Link to="/">
          <TextButton icon={BsChevronLeft} size={32} title="voltar" />
        </Link>
        <h2>Adicionar prato</h2>
        <Edit>
          <div className="file">
            Imagem do prato
            <Input
              type="file"
              icon={BsUpload}
              label="Selecione a imagem"
              accept="image/*"
              onChange={handleChangeDishImage}
            />
          </div>
          <LabelInput
            type="text"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            gray
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>
            Categoria
            <select id="category" onChange={handleCategory}>
              <option value="">Selecione uma opção</option>
              <option value="Refeição">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Bebidas">Bebidas</option>
            </select>
          </label>
          <div className="ingredients">
            Ingredientes
            <div>
              {items.map((item, index) => (
                <Items
                  key={String(index)}
                  value={item}
                  onClick={() => handleRemoveItem(index)}
                />
              ))}
              <Items
                placeholder="Adicionar"
                $isNew
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onClick={handleAddItem}
              />
            </div>
          </div>
          <LabelInput
            type="number"
            label="Preço"
            placeholder="R$ 00,00"
            gray
            className="price"
            onChange={(e) => setPrice(e.target.value)}
          />

          <label>
            Descrição
            <textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <Link to="/">
            <button type="submit" onClick={handleNewProduct}>
              Salvar alterações
            </button>
          </Link>
        </Edit>
      </Main>

      <Footer />
    </Container>
  );
}
