import { Configuration } from "webpack";
import { join, resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const config: Configuration = {
  entry: resolve("src", "index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@shared': resolve("src", "shared"),
      '@theme': resolve("src", "theme"),
      '@assets': resolve("src", "assets"),
      '@api': resolve("src", "api"),
      '@store': resolve("src", "store"),
      '@types': resolve("types"),
      '@test-utils': resolve("test-utils"),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join("src", "index.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
};
