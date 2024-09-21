import { Colors } from "@/constants";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

export const CustomThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme() ?? 'dark';
  const theme = Colors[colorScheme];
  return (
    <ThemeProvider value={theme}>{children}</ThemeProvider>
  );
}