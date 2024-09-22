import { Dropdown } from 'react-native-element-dropdown';
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import { useThemeColor } from './hooks';

interface ThemedDropdownProps<T> extends DropdownProps<T> { }

export const ThemedDropdown = <T,>(props: ThemedDropdownProps<T>) => {
  const color = useThemeColor('colors.text');
  const backgroundColor = useThemeColor('colors.card');
  const selectedBackgroundColor = useThemeColor('colors.background');

  return (
    <Dropdown
      search
      // backgroundColor={backgroundColor}
      activeColor={selectedBackgroundColor}
      // placeholderStyle={{ color: placeholderColor }}
      containerStyle={{ backgroundColor, borderWidth: 0, borderRadius: 10 }}
      itemContainerStyle={{ backgroundColor }}
      itemTextStyle={{ color }}
      selectedTextStyle={{ color, backgroundColor, padding: 10 }}
      selectedTextProps={{ ellipsizeMode: 'tail' }}
      {...props}
    />
  )
}