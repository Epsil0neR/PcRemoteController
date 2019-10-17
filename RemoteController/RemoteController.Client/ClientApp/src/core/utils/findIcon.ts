import { fas } from '@fortawesome/free-solid-svg-icons';

export function findIcon(name: string) {
  const pack = fas;
  for (const key in pack) {
    if (!pack.hasOwnProperty(key))
      continue;

    const icon = pack[key];
    if (icon.iconName === name)
      return icon;
  }
}
