/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';
import { DS } from '@/components';

export function useThemeColor(
  colorName: keyof typeof DS.Colors.light & keyof typeof DS.Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  return DS.Colors[theme][colorName];
}
