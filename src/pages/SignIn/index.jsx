import { Container, FormScreen } from './styles';

import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { LabelInput } from '../../components/LabelInput';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { useRef, useState } from 'react';

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(e) {
    e.preventDefault();

    signIn({ email, password });
  }

  const app = useRef();

  let outlined;
  window.addEventListener('load', function () {
    outlined = app.current.offsetWidth <= 1024 ? false : true;
    console.log(outlined);
  });

  return (
    <Container ref={app}>
      <Logo />
      <FormScreen>
        <h2>Faça login</h2>

        <LabelInput
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          {...outlined}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelInput
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          {...outlined}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" title="Entrar" onClick={handleSignIn} />

        <Link to="/create">
          <TextButton type="button" title="Criar uma conta" />
        </Link>
      </FormScreen>
    </Container>
  );
}
