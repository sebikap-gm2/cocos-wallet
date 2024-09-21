import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabLayout() {
  const tabBarActiveTintColor = useThemeColor('colors.text');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0, // Remove top border
          elevation: 0,       // Remove shadow on Android
          shadowOpacity: 0,   // Remove shadow on iOS
        },
      }}
    >
      <Tabs.Screen
        name="(drawer)"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="instruments"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cash' : 'cash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
