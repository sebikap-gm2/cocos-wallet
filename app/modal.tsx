import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  const route = useRoute();
  const params = route.params;
  if (!params) return null;
  if (!params.title) return null;

  return (
    <View style={styles.container}>
      <Text>{params.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
