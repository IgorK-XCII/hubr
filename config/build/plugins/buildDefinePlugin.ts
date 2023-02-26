import { DefinePlugin } from 'webpack';

export function buildDefinePlugin(isDev: boolean) {
  return new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  });
}
