import { StyleSheet, View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  full?: boolean
  flex?: number
  center?: boolean
};

export function ThemedView({ style, flex, center, full = false, ...otherProps }: ThemedViewProps) {
  return <View style={[styles.container, full && styles.full, flex && { flex, justifyContent: 'center', alignItems: center ? 'center' : undefined }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  container: {

  },
  full: {
    width: '100%',
  },
  flex: {
    flex: 1
  }
})
