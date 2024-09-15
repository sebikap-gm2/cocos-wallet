import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export function ThemedView({ style, onPress = undefined, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor('background');

  const Component = onPress ? TouchableOpacity : View;

  return <Component onPress={onPress} style={[{ backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  }
})
