import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from './hooks';
import { ThemedText } from './ThemedText';

type ButtonType = 'primary' | 'secondary' | 'plain';

export type ThemedButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  background?: boolean;
  center?: boolean;
  icon?: string;
  iconVertical?: boolean;
  selected?: boolean;
  text?: string;
  type?: ButtonType;
};

export function ThemedButton({
  onPress,
  background = true,
  center = true,
  icon,
  iconVertical,
  selected,
  text,
  type = 'primary',
  children,
  style,
  ...rest
}: ThemedButtonProps) {
  const color = useThemeColor('colors.primary');
  const backgroundColor = useThemeColor('colors.textLight');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        center && styles.center,
        icon ? styles.iconContainer : undefined,
        iconVertical ? { flexDirection: 'column', borderRadius: 15 } : undefined,
        background && { backgroundColor },
        type === 'secondary' && {
          backgroundColor: undefined,
          borderWidth: 1,
          borderColor: backgroundColor,
        },
        type === 'plain' && { backgroundColor: undefined },
        style,
      ]}
      {...rest}>
      {icon ? (
        <Ionicons size={28} style={[{ marginBottom: 0 }]} name={icon} color={color} {...rest} />
      ) : null}
      {text ? <ThemedText type="defaultSemiBold">{text}</ThemedText> : children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
    margin: 2,
    padding: 10,
    borderRadius: 50,
  },
  text: {
    fontWeight: 'bold',
  },
});
