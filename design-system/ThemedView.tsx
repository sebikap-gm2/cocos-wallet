import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  full?: boolean
};

export function ThemedView({ style, full = false, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor('background.primary');

  return <View style={[styles.container, { backgroundColor }, full && styles.full, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  container: {

  },
  full: {
    width: '100%',
  }
})
