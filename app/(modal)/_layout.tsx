import { Stack } from 'expo-router';

export default function ModalLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}>
      <Stack.Screen name="instrumentDetails" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="transaction" />
    </Stack>
  );
}
