import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
};

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor('background');

  return <View style={[styles.full, { backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  }
})
