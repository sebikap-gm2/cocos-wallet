import { useThemeColor } from "./hooks";
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ThemedTextInputProps extends TextInputProps { }

export const ThemedTextInput = (props: ThemedTextInputProps) => {
  const color = useThemeColor("colors.text");
  const placeholderTextColor = useThemeColor("colors.textLight");

  return (
    <View style={[styles.container, { borderColor: placeholderTextColor }]}>
      <TextInput
        {...props}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, { color }]}
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
    width: "100%",
  } as ViewStyle,
  input: {
    fontSize: 16,
  } as TextStyle,
});
