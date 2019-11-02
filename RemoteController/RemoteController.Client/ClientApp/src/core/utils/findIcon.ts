import { fas, IconDefinition, IconName } from '@fortawesome/free-solid-svg-icons';

export function findIcon(name: string | IconName): IconDefinition {
  const pack = fas;
  for (const key in pack) {
    if (!pack.hasOwnProperty(key))
      continue;

    const icon = pack[key];
    if (icon.iconName === name)
      return icon;
  }
}

export function allIcons(): IconDefinition[] {
  const rv: IconDefinition[] = [];

  const pack = fas;
  for (const key in pack) {
    if (!pack.hasOwnProperty(key))
      continue;

    const icon = pack[key];
    if (typeof icon.iconName === 'string')
      rv.push(icon);
  }

  return rv;
}
