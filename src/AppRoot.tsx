import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { defaultTheme } from '@theme';
import { ErrorBoundary } from '@shared';

import { GlobalStyles } from './GlobalStyles';

import App from './App';
import { RootAppProps } from './app-root.models';

export const AppRoot: FC<RootAppProps> = ({ Router, location, store }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <Router location={location}>
            <ThemeProvider theme={defaultTheme}>
              <GlobalStyles />
              <App />
            </ThemeProvider>
          </Router>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  );
};
