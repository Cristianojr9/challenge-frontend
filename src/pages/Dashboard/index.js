import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md'

import Header from '../../components/Header';
import { Container, TableContainer } from './styles';
import formattedValue from '../../utils/formatValue';

export default function Dashboard() {
  return(
    <>
      <Header />
      <Container>
        <h1>Lista de produtos</h1>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Adicionar ao carrinho</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  maça
                </td>
                <td>
                  {formattedValue(10)}
                </td>
                <td><MdAddShoppingCart size="25px"/></td>
              </tr>  
            </tbody> 
          </table>
        </TableContainer>
      </Container>
    </>
  )
}