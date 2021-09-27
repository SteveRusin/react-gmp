import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@theme';
import { ErrorBoundary } from '@shared';

import { GlobalStyles } from './GlobalStyles';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.querySelector('#root')
);
