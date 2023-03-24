export enum BUILD_MODE {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

export enum PROJECT {
  STORYBOOK = 'storybook',
  FRONTEND = 'frontend',
  JEST = 'jest'
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BUILD_MODE;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  analyze: boolean;
  apiUrl: string;
  project: PROJECT
}

export interface BuildEnv {
  mode: BUILD_MODE;
  port: number;
  analyze: boolean;
  apiUrl: string;
}
