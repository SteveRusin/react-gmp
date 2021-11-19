import { Request, Response, Router } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import { AppRoot } from '../src/AppRoot';
import { createStore, MoviesStatus } from '../src/store';
import { fetchMoviesAPI, mapSearchMovieParams } from '../src/api/Movies';
import { webpackReadFile } from './helpers';

const searchPageController = Router();

searchPageController.get('/:searchQuery?', async (req: Request, res: Response) => {
  const { data, limit, offset, totalAmount } = await fetchMoviesAPI(
    mapSearchMovieParams({
      ...req.params,
      ...req.query,
    })
  );

  const store = createStore({
    movie: {
      totalAmount,
      limit,
      movies: data,
      error: null,
      offset,
      status: MoviesStatus.LoadingSucceed
    },
  });

  const sheet = new ServerStyleSheet();
  const appHtml = renderToString(
    sheet.collectStyles(
      <AppRoot
        Router={StaticRouter}
        location={req.originalUrl}
        store={store}
      ></AppRoot>
    )
  );

  const styles = sheet.getStyleTags();

  const indexHtml = Buffer.from(
    (await webpackReadFile('/index.html')) as Buffer
  ).toString();

  const state = JSON.stringify(store.getState()).replace(/</g, '\\u00c');

  const compiledHtml = indexHtml
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('<style id="globalStyles"></style>', styles)
    .replace('window.ROOT_STATE = null;', `window.ROOT_STATE = ${state};`);

  res.contentType('text/html');
  res.status(200);
  res.send(compiledHtml);
});

export { searchPageController };
