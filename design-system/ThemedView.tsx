import { StyleSheet, View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  center?: boolean
  flex?: number
  full?: boolean
  row?: boolean
  spaceBetween?: boolean
};

export function ThemedView({ style, flex, center, row, full, spaceBetween, ...otherProps }: ThemedViewProps) {
  return (
    <View
      style={[
        styles.container,
        full && styles.full,
        flex && { flex },
        center && { alignItems: 'center' },
        row && { flexDirection: 'row' },
        spaceBetween && { justifyContent: 'space-between' },
        style
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {

  },
  full: {
    width: '100%',
  },
  flex: {
    justifyContent: 'center',
  }
})
