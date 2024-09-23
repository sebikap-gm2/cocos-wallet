import { NestedKeys, NestedRoute } from '@/utils';
import { Theme } from '@react-navigation/native';

export type HexColor = `#${string}`;

interface Palette {
  primary: HexColor;
  secondary: HexColor;
  accent: HexColor;
  success: HexColor;
  error: HexColor;
  warning: HexColor;
}
export type PaletteColor = keyof Palette & string;

export type ThemeColor = keyof Theme & string;

export interface IColors {
  light: Theme & { colors: { textLight: string } };
  dark: Theme & { colors: { textLight: string } };
}

export type ColorsRoute = NestedRoute<IColors>;
export type ColorsKeys = NestedKeys<IColors>;

export const Colors: IColors = {
  light: {
    dark: false,
    colors: {
      primary: '#007bff', // Bright blue
      background: '#ffffff', // White
      card: '#f8f9fa', // Light gray
      text: '#212529', // Dark gray
      border: '#dee2e6', // Light border gray
      notification: '#ffc107', // Yellow
      textLight: '',
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: '#ffffff', // White
      background: '#121212', // Very dark gray
      card: '#1f1f1f', // Dark gray
      text: '#ffffff', // White
      border: '#333333', // Darker gray
      notification: '#ff4757', // Bright red,
      textLight: '#98999a', // Light gray
    },
  },
};
