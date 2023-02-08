type Mods = Record<string, string | boolean>;

export function clsx(cls: string[] = [], mods: Mods = {}): string {
  return [
    ...cls.filter(Boolean),
    ...Object.entries(mods).reduce((acc, [key, val]) => {
      if (val) acc.push(key);

      return acc;
    }, []),
  ].join(" ");
}
