import { DS } from '@/design-system';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <DS.View style={styles.container}>
        <DS.Text type="title">This screen doesn't exist.</DS.Text>
        <Link href="/" style={styles.link}>
          <DS.Text type="link">Go to home screen!</DS.Text>
        </Link>
      </DS.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
