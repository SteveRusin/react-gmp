import { resolve } from 'path';
import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import CompressionPlugin from "compression-webpack-plugin";

import { config } from "./webpack.config.common";

const webpackProdConfigPart: Configuration = {
  mode: "production",
  output: {
    path: resolve("build"),
    filename: "[name].[chunkhash].bundle.js",
    clean: true,
    publicPath: '/',
  },
  performance: {
    hints: "warning",
    maxAssetSize: 1_000_000,
    // Calculates sizes of gziped bundles.
    assetFilter: function (assetFilename: string) {
      return assetFilename.endsWith(".js.gz");
    },
  },
  plugins: [
    /**
     * cast to any since the plugin type is incompatible with webpack 5
     * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55708
     */
    new CompressionPlugin({
      algorithm: "gzip",
    }) as any,
  ],
};

export default merge(config, webpackProdConfigPart);
