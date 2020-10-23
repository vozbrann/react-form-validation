import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

    </React.Fragment>
  );
}

export default App;
