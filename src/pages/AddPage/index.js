import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { GrAddCircle } from 'react-icons/gr' 

import Header from '../../components/Header';

import { Container, TableContainer } from './styles';

import api from '../../services/api';

export default function AddPage() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  async function handleAdd() {
    const data = {
      title, 
      value
    }

    if(data.title === '' && data.value === '') {
      toast.error("Preencha os dados");
    } else {
      const response = await api.post('/products', data);

      const product = response.data;
      setProducts([...products, product]);

      toast.success("Cadastrado com sucesso");
    }
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
                      onClick={handleAdd}
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