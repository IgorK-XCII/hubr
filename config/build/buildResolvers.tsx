import { ResolveOptions } from 'webpack';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsConfigPathsPlugin()],
  };
}
