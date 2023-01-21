import express from 'express';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { webpackReadFile } from './helpers';
import { webpackMiddleware, compiler } from './webpack-middleware';
import { searchPageController } from './searchPageController';

const PORT = 3000;
const app = express();

app.use(webpackMiddleware);
app.use(webpackHotMiddleware(compiler as any));
app.use('/search', searchPageController);

app.get(/.(js|css|map|ico|png|jpg)$/, async (req, res) => {
  console.log(req.url);
  try {
    const file = await webpackReadFile(req.url);
    res.status(200);
    res.send(file);
  } catch(e) {
    console.log('err', e);
    res.status(500);
    res.end();
  }
});

app.get('*', async (req, res) => {
  console.log('hit url', req.url);

  try {
    const file = await webpackReadFile('/index.html');

    res.contentType('text/html');
    res.status(200);
    res.send(Buffer.from(file as Buffer).toString());
  } catch(e) {
    res.status(404);
    res.end();
  }
})

webpackMiddleware.waitUntilValid(() => {
  app.listen(PORT, function () {
    console.log(`React server is listening on a port ${PORT}`);
  });
});
