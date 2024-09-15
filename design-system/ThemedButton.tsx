import { TouchableOpacity, StyleSheet, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';

type ButtonType = 'primary' | 'secondary';

export type ThemedButtonProps = TouchableOpacityProps & {
  onPress: () => void
  text?: string
  selected?: boolean
  type?: ButtonType
};

export function ThemedButton({
  onPress,
  text,
  selected = false,
  type = 'primary',
  children,
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor('palette.primary');
  const color = useThemeColor('text.contrast');
  const accentColor = useThemeColor('palette.accent');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { backgroundColor },
        styles.container,
      ]}
      {...rest}
    >
      {text ? <ThemedText style={{ color }}>{text}</ThemedText> : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5
  },
});
