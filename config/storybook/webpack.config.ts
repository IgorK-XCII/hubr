/* eslint-disable @typescript-eslint/no-non-null-assertion */
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoader, buildSvgLoader } from '../build/loaders';
import { buildDefinePlugin } from '../build/plugins';
import { PROJECT } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
  if (!config.resolve!.plugins) config.resolve!.plugins = [];

  config.resolve!.plugins.push(new TsconfigPathsPlugin());
  config.resolve!.extensions?.push('ts', 'tsx');
  config.resolve!.fallback = {
    http: false,
  };

  config.module!.rules = config.module!.rules?.map((rule) => {
    const _rule = rule as RuleSetRule;

    if (/svg/.test(_rule.test as string)) {
      return { ..._rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules?.push(buildSvgLoader(), buildCssLoader(true));

  config.plugins?.push(buildDefinePlugin(true, '', PROJECT.STORYBOOK));

  return config;
};
