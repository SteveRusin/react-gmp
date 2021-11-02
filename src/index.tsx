import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { defaultTheme } from '@theme';
import { ErrorBoundary } from '@shared';

import { GlobalStyles } from './GlobalStyles';

import App from './App';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
