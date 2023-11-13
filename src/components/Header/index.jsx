import { useRef } from 'react';

import { BsSearch } from 'react-icons/bs';
import { PiReceiptLight } from 'react-icons/pi';
import { GoSignOut } from 'react-icons/go';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { Container, Menu } from './styles';
import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { TextButton } from '../TextButton';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

export function Header({ admin = false }) {
  const header = useRef();

  const MenuControls = {
    open() {
      header.current.classList.add('menu-active');
    },
    close() {
      header.current.classList.remove('menu-active');
    },
  };

  return (
    <Container ref={header} className={admin ? 'admin' : ''}>
      <IconButton
        icon={FiMenu}
        size={32}
        className="open-menu"
        onClick={MenuControls.open}
      />
      <IconButton
        icon={AiOutlineClose}
        size={32}
        className="close-menu"
        onClick={MenuControls.close}
      />

      <h2>Menu</h2>

      {admin ? <Logo admin /> : <Logo />}

      <Input
        type="search"
        icon={BsSearch}
        placeholder="Busque por pratos ou ingredientes"
      />

      {admin ? (
        <Link to="/dish/create">
          <Button icon={null} title="Novo prato" quantity={0} height />
        </Link>
      ) : (
        <Button
          icon={PiReceiptLight}
          title={'Pedidos (0)'}
          quantity={0}
          height
        />
      )}

      <Menu className="menu">
        <Input
          type="search"
          icon={BsSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
        {admin ? (
          <li onClick={MenuControls.close}>
            <TextButton title="Novo prato" />
          </li>
        ) : null}

        <li onClick={MenuControls.close}>
          <TextButton title="Sair" />
        </li>
      </Menu>
      <IconButton icon={GoSignOut} size="32" />
    </Container>
  );
}
