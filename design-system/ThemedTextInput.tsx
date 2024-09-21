import { TextInput, View, StyleSheet, TextInputProps, ViewStyle, TextStyle } from 'react-native';

interface ThemedTextInputProps extends TextInputProps { }

export const ThemedTextInput = (props: ThemedTextInputProps) => {

  return (
    <View style={[styles.container]}>
      <TextInput
        {...props}
        style={[styles.input]}
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
