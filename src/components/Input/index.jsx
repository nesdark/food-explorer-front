import { useRef } from 'react';

import { Container } from './styles';

export function Input({ icon: Icon, label, ...rest }) {
  const cont = useRef(null);

  function say() {
    console.log(cont);
  }

  return (
    <Container className={Icon ? 'responsive' : ''} ref={cont} onClick={say}>
      {Icon && <Icon size={24} />}
      {label}
      <input {...rest} />
    </Container>
  );
}
