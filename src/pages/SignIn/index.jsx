import { Container, FormScreen } from './styles';

import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { LabelInput } from '../../components/LabelInput';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';
import { useRef, useState } from 'react';

export function SignIn() {
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
        />
        <LabelInput
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          {...outlined}
        />

        <Button type="submit" title="Entrar" />

        <Link to="/create">
          <TextButton type="button" title="Criar uma conta" />
        </Link>
      </FormScreen>
    </Container>
  );
}
