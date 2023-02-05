type Mods = Record<string, boolean>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  const transformedMods = Object.entries(mods).reduce((acc, [key, val]) => {
    if (val) acc.push(key);

    return acc;
  }, []);

  return [cls, ...additional, ...transformedMods].join(" ");
}
