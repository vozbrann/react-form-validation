import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CardsList from './components/CardsList';
import Button from './components/Button';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #F2F2F2;
  }
`;

const Container = styled.div`
  padding: 60px 152px;
`;
const BottomControl = styled.div`
  text-align: center;
`;


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <CardsList/>
        <BottomControl>
          <Button>Buy cheapest</Button>
        </BottomControl>
      </Container>
    </React.Fragment>
  );
}

export default App;
