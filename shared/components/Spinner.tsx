import { DS, useThemeColor } from '@/design-system';
import { ActivityIndicator, StyleSheet } from 'react-native';

export const Spinner = () => {
  const color = useThemeColor('colors.text');

  return (
    <DS.View center style={styles.container}>
      <ActivityIndicator size="large" color={color} />
      <DS.Text>Loading...</DS.Text>
    </DS.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
