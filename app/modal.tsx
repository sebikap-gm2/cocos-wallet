import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { z } from 'zod';

const modalParamsValidator = z.object({
  params: z.object({
    title: z.string()
  })
});

export default function Modal() {
  const route = useRoute();
  const { params } = modalParamsValidator.parse(route);
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
