import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
