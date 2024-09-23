import { StyleSheet, View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  center?: boolean;
  flex?: number;
  full?: boolean;
  gap?: number;
  justifyCenter?: boolean;
  row?: boolean;
  spaceBetween?: boolean;
};

export function ThemedView({
  style,
  flex,
  center,
  row,
  gap,
  full,
  justifyCenter,
  spaceBetween,
  ...otherProps
}: ThemedViewProps) {
  return (
    <View
      style={[
        styles.container,
        full && styles.full,
        { flex, gap },
        center && { alignItems: 'center' },
        row && { flexDirection: 'row' },
        justifyCenter && { justifyContent: 'center' },
        spaceBetween && { justifyContent: 'space-between' },
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  full: {
    width: '100%',
  },
  flex: {
    justifyContent: 'center',
  },
});
