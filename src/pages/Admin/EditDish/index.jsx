import { useState, useEffect } from 'react';
import { api } from '../../../services/api.js';

import { BsChevronLeft, BsUpload } from 'react-icons/bs';

import { Container, Main, Edit } from './styles.js';

import { Header } from '../../../components/Header/index.jsx';
import { Footer } from '../../../components/Footer/index.jsx';
import { TextButton } from '../../../components/TextButton/index.jsx';
import { Input } from '../../../components/Input/index.jsx';
import { LabelInput } from '../../../components/LabelInput/index.jsx';
import { Items } from '../../../components/Items/index.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';

export function EditDish() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const params = useParams();

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const [dishImageFile, setDishImageFile] = useState(null);
  const [dishImage, setDishImage] = useState(null);

  function handleAddItem() {
    setItems((prevState) => [...prevState, newItem]);
    setNewItem('');
  }

  function handleRemoveItem(itemToDelete) {
    setItems((prevState) =>
      prevState.filter((item, index) => index !== itemToDelete)
    );
  }

  function handleChangeDishImage(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setDishImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setDishImage(imagePreview);
  }

  async function handleUpdateDish() {
    await api.put(`/products/update/${params.id}`, {
      title,
      price,
      description,
      ingredients: items,
      category,
      image: 'image-url',
    });

    const fileUploadForm = new FormData();
    fileUploadForm.append('image', dishImageFile);

    await api.patch(`/products/image/${params.id}`, fileUploadForm);

    alert('Prato atualizado com sucesso!');
    navigate('/');
  }

  async function handleDeleteDish() {
    await api.delete(`/products/${params.id}`);

    alert('Prato excluído com sucesso!');
    navigate('/');
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);

      const { title, category, ingredients, price, description } =
        response.data;
      setTitle(title);
      setCategory(category);
      setItems(ingredients.map((ingredient) => ingredient.name));
      setPrice(price);
      setDescription(description);
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
          <h2>Editar prato</h2>
          <Edit>
            <div className="file">
              Imagem do prato
              <Input
                type="file"
                icon={BsUpload}
                label={
                  dishImageFile ? dishImageFile.name : 'Selecionar  nova imagem'
                }
                accept="image/*"
                onChange={handleChangeDishImage}
                title={
                  dishImageFile ? dishImageFile.name : 'Selecione a imagem'
                }
              />
            </div>
            <LabelInput
              type="text"
              label="Nome"
              placeholder="Ex.: Salada Ceasar"
              gray
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label>
              Categoria
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="meals">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="drinks">Bebidas</option>
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
              value={price}
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
                value={description}
              ></textarea>
            </label>

            <div>
              <button type="button" onClick={handleDeleteDish}>
                Excluir prato
              </button>
              <button type="submit" onClick={handleUpdateDish}>
                Salvar alterações
              </button>
            </div>
          </Edit>
        </Main>
      )}

      <Footer />
    </Container>
  );
}
