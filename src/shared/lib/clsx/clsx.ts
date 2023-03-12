type Mods = Record<string, string | boolean | undefined>;

export function clsx(cls: (string | undefined)[] = [], mods: Mods = {}): string {
  return [
    ...cls.filter(Boolean),
    ...Object.entries(mods).reduce<string[]>((acc, [key, val]) => {
      if (val) acc.push(key);

      return acc;
    }, []),
  ].join(' ');
}
