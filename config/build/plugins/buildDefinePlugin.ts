import { DefinePlugin } from 'webpack';

export function buildDefinePlugin(isDev: boolean, apiUrl: string) {
  return new DefinePlugin({
    __IS_DEV__: isDev,
    __API__: JSON.stringify(apiUrl),
  });
}
