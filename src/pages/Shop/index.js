import React from 'react';

import Header from '../../components/Header';
import { Container, TableContainer } from './styles';
import formattedValue from '../../utils/formatValue';

export default function Shop() {
  return(
    <>
      <Header />
      <Container>
        <h1>Carrinho</h1>
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
                <td>
                  <input type="checkbox"/>
                </td>
              </tr>  
            </tbody> 
          </table>
          <h2>Valor total: {formattedValue(10)}</h2>
        </TableContainer>
      </Container>
    </>
  )
}