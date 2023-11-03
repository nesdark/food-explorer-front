import { Container } from './styles';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      {/* <Section title="Refeições"></Section>
      <Section title="Sobremesas"></Section>
      <Section title="Bebidas"></Section>
      <Footer /> */}
    </Container>
  );
}
