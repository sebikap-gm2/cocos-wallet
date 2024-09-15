import { NestedKeys, NestedRoute } from "@/utils";

export type HexColor = `#${string}`;

interface Palette {
  primary: HexColor
  secondary: HexColor
  accent: HexColor
  success: HexColor
  error: HexColor
  warning: HexColor
}
export type PaletteColor = keyof Palette & string;

interface ThemeColors {
  text: {
    primary: HexColor
    secondary: HexColor
    contrast: HexColor
  }
  background: {
    primary: HexColor
    secondary: HexColor
  }
  palette: Palette
}

export type ThemeColor = keyof ThemeColors & string;

export interface IColors {
  light: ThemeColors
  dark: ThemeColors
}

export type ColorsRoute = NestedRoute<IColors>;
export type ColorsKeys = NestedKeys<IColors>;

export const Colors: IColors = {
  light: {
    text: {
      primary: '#333333',
      secondary: '#6B7280',
      contrast: '#FFFFFF'
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB'
    },
    palette: {
      primary: '#3B82F6',
      secondary: '#2563EB',
      accent: '#2563EB',
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B'
    }
  },
  dark: {
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
      contrast: '#0F172A',
    },
    background: {
      primary: '#0F172A',
      secondary: '#1F2937'
    },
    palette: {
      primary: '#1D4ED8',
      secondary: '#3B82F6',
      accent: '#2563EB',
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B'
    }
  },
};
