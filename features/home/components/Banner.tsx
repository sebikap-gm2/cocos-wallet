import { DS, useThemeColor } from '@/design-system';
import { Alert, StyleSheet } from 'react-native';

export const Banner = () => {
  const backgroundColor = useThemeColor('colors.card');
  const backgroundColor2 = useThemeColor('colors.background');
  return (
    <DS.View row center style={[styles.container, { backgroundColor }]}>
      <DS.Text style={styles.text}>Start your first deposit</DS.Text>
      <DS.Button
        type="secondary"
        onPress={() => Alert.alert('Start', 'Get started')}
        style={[styles.button, { backgroundColor: backgroundColor2 }]}>
        <DS.Text style={{}}>Get started</DS.Text>
      </DS.Button>
    </DS.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
    height: 100,
    width: '90%',
  },
  text: {
    width: '30%',
  },
  button: {
    borderRadius: 30,
    borderWidth: 0,
  },
});
