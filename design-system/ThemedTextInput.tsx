import { TextInput, View, StyleSheet, TextInputProps, ViewStyle, TextStyle } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

interface ThemedTextInputProps extends TextInputProps { }

export const ThemedTextInput = (props: ThemedTextInputProps) => {
  const backgroundColor = useThemeColor('background.primary');
  const textColor = useThemeColor('text.primary');
  const borderColor = useThemeColor('background.secondary');
  const placeholderColor = useThemeColor('text.secondary');

  return (
    <View style={[styles.container, { borderColor }]}>
      <TextInput
        {...props}
        style={[styles.input, { backgroundColor, color: textColor }]}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '100%',
  } as ViewStyle,
  input: {
    fontSize: 16,
  } as TextStyle,
});
