import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart, MdDelete } from 'react-icons/md'

import Header from '../../components/Header';
import { Container, TableContainer } from './styles';
import formattedValue from '../../utils/formatValue';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [cartShop, setCartShop] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
        setProducts(response.data);
        setCartShop(...products);
    }
    loadProducts();
  }, [products]);

  console.log(cartShop);
  
  async function handleAddCart() {     
    await api.post('/products/cart/', cartShop);

    toast.success("Adicionado ao carrinho");
  }

  
  async function handleRemove(id) {
    await api.delete(`products/${id}`);

    setProducts(products.filter(product => product.id !== id));

    toast.success("Removido com sucesso");
  }

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
                <th>Remover da lista</th>
              </tr>
            </thead>
            {products.length === 0 ? (
              <p>Nenhum caso cadastrado</p>
            ) : (products.map(product => (   
                  <tbody  key={product.id}>
                    <tr >
                      <td>
                        {product.title}
                      </td>
                      <td>
                        {formattedValue(product.value)}
                      </td>
                      <td>
                        <MdAddShoppingCart 
                          size="25px" 
                          onClick={() => {
                            handleAddCart()
                          }}
                        />
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