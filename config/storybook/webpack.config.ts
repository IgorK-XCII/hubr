import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoader, buildSvgLoader } from '../build/loaders';
import { buildDefinePlugin } from '../build/plugins';

export default ({ config }: { config: Configuration }) => {
  // eslint-disable-next-line no-param-reassign
  if (!config.resolve.plugins) config.resolve.plugins = [];

  config.resolve.plugins.push(new TsconfigPathsPlugin());
  config.resolve.extensions.push('ts', 'tsx');
  config.resolve.fallback = {
    http: false,
  };

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader(), buildCssLoader(true));

  config.plugins.push(buildDefinePlugin(true));

  return config;
};
