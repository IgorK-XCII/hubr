import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { paths, isDev } = options;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    isDev && new ReactRefreshWebpackPlugin(),
  ];
}
