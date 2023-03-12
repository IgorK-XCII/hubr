import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';
import { buildDefinePlugin } from './plugins';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const {
    paths, isDev, analyze, apiUrl,
  } = options;

  const plugins: WebpackPluginInstance[] = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    buildDefinePlugin(isDev, apiUrl),
  ];

  if (isDev) plugins.push(new ReactRefreshWebpackPlugin());

  if (analyze) plugins.push(new BundleAnalyzerPlugin());

  return plugins;
}
