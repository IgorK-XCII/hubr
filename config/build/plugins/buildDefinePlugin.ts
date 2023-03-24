import { DefinePlugin } from 'webpack';
import { PROJECT } from '../types/config';

export function buildDefinePlugin(isDev: boolean, apiUrl: string, project: PROJECT) {
  return new DefinePlugin({
    __IS_DEV__: isDev,
    __API__: JSON.stringify(apiUrl),
    __PROJECT__: JSON.stringify(project),
  });
}
