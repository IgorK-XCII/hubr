export const mergeQueryParams = (params: Record<string, any>) => {
  const currentQyeryParams = new URLSearchParams(window.location.search);

  const append = (key: string, value: string | number) => {
    currentQyeryParams.set(key, encodeURIComponent(value));
  };

  const process = (key: string, value: any) => {
    if (value === undefined) return;

    if (Array.isArray(value)) {
      value.forEach((v) => process(key, v));
    } else if (typeof value === 'object') {
      Object.entries(value)
        .forEach(([k, v]) => process(`${key}[${k}]`, v));
    } else {
      append(key, value);
    }
  };

  Object.entries(params)
    .forEach(([key, value]) => process(key, value));

  const result = currentQyeryParams.toString();

  if (!result) return '';

  return `?${result}`;
};
