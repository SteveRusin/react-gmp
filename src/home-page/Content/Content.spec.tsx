import axios, { AxiosStatic } from 'axios';
import { screen, waitFor, act } from '@testing-library/react';

import { renderWithRedux, mockMoviesResponse } from '@test-utils';
import { store } from '@store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';

import { Content } from './Content';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

jest.mock('axios');

function renderWithRouter() {
  const history = createMemoryHistory();
  return {
    ...renderWithRedux(
      <ThemeProvider theme={defaultTheme}>
        <Router history={history}>
          <Content />
        </Router>
      </ThemeProvider>,
      store
    ),
    history,
  };
}

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Content Component', () => {
  it('should render component and display loading overlay', () => {
    mockedAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: mockMoviesResponse(),
      });
    });
    renderWithRouter();
    expect(screen.getByTestId('loading-overlay')).toBeDefined();
  });

  it('should fetch movies on component init', async () => {
    const mockedMoviesGet = mockedAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: mockMoviesResponse(),
      });
    });

    renderWithRouter();

    const movieComponents = await waitFor(() =>
      screen.getAllByTestId('movie-wrapper')
    );


    const loadingOverlay = screen.queryByTestId('loading-overlay');

    expect(loadingOverlay).toBeNull();
    expect(movieComponents.length).toBe(mockMoviesResponse().data.length);
    expect(mockedMoviesGet).toBeCalled();
  });

  it('should display something went wrong in case of error', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error('mock error')));
    renderWithRouter();

    const errorMessage = await waitFor(() =>
      screen.getByText(/something went wrong/i)
    );


    const loadingOverlay = screen.queryByTestId('loading-overlay');

    expect(loadingOverlay).toBeNull();
    expect(errorMessage).toBeTruthy();
  });
});
