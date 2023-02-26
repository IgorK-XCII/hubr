import { RuleSetRule } from 'webpack';
import { buildCssLoader, buildSvgLoader } from './loaders';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options;

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  };

  return [fileLoader, svgLoader, tsLoader, cssLoader];
}
