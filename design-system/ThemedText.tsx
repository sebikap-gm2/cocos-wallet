import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  bold?: boolean,
  center?: boolean,
  flex?: number,
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'error';
};

export function ThemedText({
  bold = false,
  center = false,
  flex = undefined,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // TODO: Overriding color as it is not being applied directly by the theme.
  const color = useThemeColor('colors.text');

  return (
    <Text
      style={[
        { color },
        bold && { fontWeight: 'bold' },
        center && { textAlign: 'center' },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'error' ? styles.link : undefined,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
  error: {
    lineHeight: 30,
    fontSize: 16,
  },
});
