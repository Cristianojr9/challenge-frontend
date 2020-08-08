import React from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from './styles';

export default function Header() {
  return(
    <Container>
      <header>
        <h2>Challenge Frontend</h2>
        <nav>
          <Link to="/">Listagem</Link>
          <Link to="/add">Cadastrar</Link>
          <Link to="/shop"><AiOutlineShoppingCart size="30px"/></Link>
        </nav>
      </header>
    </Container>
  )
}