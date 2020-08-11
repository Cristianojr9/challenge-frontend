import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import { Container, TableContainer } from './styles';

import formattedValue from '../../utils/formatValue';
import { MdDelete } from 'react-icons/md'

import api from '../../services/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Shop() {
  const [cart, setCart] = useState([]);
  const totalValue = cart.reduce((total, product) => parseInt(total) + parseInt(product.value), 0);

  useEffect(() => {
    async function loadCart() {
      const response = await api.get('/products/cart');
        setCart(response.data);
    }
    loadCart();
  }, []);

  async function handleRemove(id) {
    await api.delete(`products/cart/${id}`);

    setCart(cart.filter(product => product.id !== id));

    toast.success("Removido com sucesso");
  }

  return(
    <>
      <Header />
      <Container>
        <h1>Carrinho</h1>
        <span>Total: {formattedValue(totalValue)}
        </span>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Remover do Carrinho</th>
              </tr>
            </thead>
            {cart.length === 0 ? (
              <p>Nenhum pruduto no carrinho</p>
            ) : (
              cart.map(product => (
                <tbody  key={product.id}>
                  <tr>
                    <td>
                      {product.title}
                    </td>
                    <td>
                      {formattedValue(product.value)}
                    </td>
                    <td>
                      <MdDelete size="25px" onClick={() => {handleRemove(product.id)}}/>
                    </td>
                  </tr>                    
                </tbody>               
              ))
            )}    
          </table>    
        </TableContainer>
      </Container>
    </>
  )
}