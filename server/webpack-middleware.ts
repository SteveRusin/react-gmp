import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import webpackDevConfig from '../config/webpack.config.dev';

export const compiler = webpack(webpackDevConfig);
export const webpackMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output!.publicPath as string,
  serverSideRender: true,
});
