import { BsSearch } from 'react-icons/bs';
import { PiReceiptLight } from 'react-icons/pi';
import { GoSignOut } from 'react-icons/go';

import { Container, Logo, Logout } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

export function Header() {
  return (
    <Container>
      <Logo>
        <svg
          width="27"
          height="30"
          viewBox="0 0 27 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z"
            fill="#065E7C"
          />
        </svg>

        <span>food explorer</span>
      </Logo>
      <Input
        type="search"
        icon={BsSearch}
        placeholder="Busque por pratos ou ingredientes"
      />
      <Button icon={PiReceiptLight} title="Pedidos (0)" />
      <IconButton icon={GoSignOut} size="32" />
    </Container>
  );
}
