import React, { useState } from 'react';

import { GrAddCircle } from 'react-icons/gr'
import Header from '../../components/Header';
import { Container, TableContainer } from './styles';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  async function handleNewProduct(e) {
    e.preventDefault();

    const products = localStorage['products'] ? JSON.parse(localStorage['products']) : [];

    const data = {
      title,
      value
    }

    if (title === '' && value === '') {
      alert('complete os campos');
    } else {
      products.push(data);
      localStorage.setItem("@challenge-fontend/products", JSON.stringify(products));
      console.log(data)
    }
    //window.location.reload();
  }

  return(
    <>
      <Header />
      <Container>
        <h1>Cadastro de produtos</h1>
        <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Cadastrar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input 
                      type="text" 
                      placeholder="ex: Hamburguer"
                      onChange={e => setTitle(e.target.value)}
                      required 
                      />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      placeholder="ex: 40,00"
                      onChange={e => setValue(e.target.value)}
                      required 
                      />
                  </td>
                  <td>
                    <GrAddCircle 
                      size="25px" 
                      onClick={handleNewProduct}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </TableContainer>
      </Container>
    </>
  )
}