
import { merge } from 'webpack-merge';
import { resolve } from 'path';

import { config } from './webpack.config.common';
import { WebpackDevConfiguration } from './webpack.models';

export const webpackDevConfigPart: WebpackDevConfiguration = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: resolve("build"),
    filename: "[name].bundle.js",
    clean: true,
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};

export default merge(config, webpackDevConfigPart);
