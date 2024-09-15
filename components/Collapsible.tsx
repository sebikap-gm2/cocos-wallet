import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';
import { DS } from '@/design-system';

export function Collapsible({ children, title }: PropsWithChildren & { title?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <DS.View>
      <DS.Button
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.palette.primary : Colors.dark.palette.primary}
        />
        {/* <DS.Text type="defaultSemiBold">{title}</DS.Text> */}
      </DS.Button>
      {isOpen && <DS.View style={styles.content}>{children}</DS.View>}
    </DS.View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
