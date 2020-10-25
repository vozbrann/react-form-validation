import React, {useState} from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from './theme';

import CardsList from './components/CardsList';
import Modal from './components/Modal';
import OrderForm from './components/OrderForm';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedProduct} from './store/actions/productActions';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.colors.gray};
  }
`;

const Container = styled.div`
  padding: 60px 152px;
`;

function App() {
  const selectedProduct = useSelector(state => state.product.selectedProduct);

  const dispatch = useDispatch();

  const removeSelected = () => {
    dispatch(setSelectedProduct(null));
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Modal show={selectedProduct} handleClose={removeSelected}>
          <OrderForm/>
        </Modal>
        <Container>
          <CardsList/>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
