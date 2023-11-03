import { Container, Fruits } from './styles';

export function Banner() {
  return (
    <Container>
      <Fruits>
        <img src="../../../public/banner.png" alt="Imagem de frutas" />
      </Fruits>
      <div>
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  );
}
