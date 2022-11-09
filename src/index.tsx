import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}
`

const theme = {
  colors: {
    primary: 'green',
    secondary: 'red',
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>
);
