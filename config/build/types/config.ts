export enum BUILD_MODE {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
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
}

export interface BuildEnv {
  mode: BUILD_MODE;
  port: number;
  analyze: boolean;
  apiUrl: string;
}
