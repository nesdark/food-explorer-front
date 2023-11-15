import { useRef } from 'react';

import { Container } from './styles';

export function Input({ icon: Icon, label, Search, ...rest }) {
  return (
    <Container className={Icon ? 'responsive' : ''}>
      {Icon && <Icon size={24} />}
      {label}
      <input onChange={(e) => Search(e.target.value)} {...rest} />
    </Container>
  );
}
