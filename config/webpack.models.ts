import { Configuration } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';

export interface WebpackDevConfiguration extends Configuration {
  devServer: WebpackDevServerConfig;
}
