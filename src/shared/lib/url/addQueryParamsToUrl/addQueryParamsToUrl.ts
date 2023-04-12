import { mergeQueryParams } from '../mergeQueryParams';

export const addQueryParamsToUrl = (params: Record<string, any>) => {
  window.history.pushState(null, '', mergeQueryParams(params));
};
