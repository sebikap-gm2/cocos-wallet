/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';
import { useMemo } from 'react';
import { NestedKeys } from '@/utils';
import { DS } from '@/design-system';
import { HexColor } from '@/design-system/constants';

type ColorKeys = NestedKeys<typeof DS.Colors['light']>;

const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export function useThemeColor(key: ColorKeys & string) {
  const theme = useColorScheme() ?? 'light';
  return useMemo(() => {
    const colorObject = DS.Colors[theme];
    return getNestedValue(colorObject, key) as HexColor
  }, [key]);
};
