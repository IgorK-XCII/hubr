import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build';
import { BuildEnv, BuildPaths, BUILD_MODE } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode || BUILD_MODE.DEVELOPMENT;
  const isDev = mode === BUILD_MODE.DEVELOPMENT;
  const PORT = env.port || 3000;
  const analyze = env.analyze || false;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    analyze,
    apiUrl,
  });

  return config;
};
