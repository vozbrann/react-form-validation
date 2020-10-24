import React, {useState} from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

import CardsList from './components/CardsList';
import Button from './components/Button';
import Modal from './components/Modal';
import OrderForm from './components/OrderForm';

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
const BottomControl = styled.div`
  text-align: center;
`;

function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Modal show={show} handleClose={hideModal}>
          <OrderForm/>
        </Modal>
        <Container>
          <CardsList/>
          <BottomControl>
            <Button onClick={showModal}>Buy cheapest</Button>
          </BottomControl>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
