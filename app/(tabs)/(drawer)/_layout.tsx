import { Profile } from '@/features';
import { useThemeColor } from '@/design-system';
import Drawer from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  const headerTintColor = useThemeColor('colors.text');
  const backgroundColor = useThemeColor('colors.background');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <Profile {...props} />}
        screenOptions={{
          headerShown: true,
          headerTintColor,
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          overlayColor: 'transparent',
          drawerStyle: {
            backgroundColor,
            width: '100%',
          },
        }}>
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: () => null,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
