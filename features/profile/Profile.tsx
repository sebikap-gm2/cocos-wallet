import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import * as Application from 'expo-application';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/design-system';
import { DS } from '@/design-system';
import { ProfileActions, ProfileMenu } from './components';
import { Portfolio } from '../portfolio';
import { PageLayout } from '@/shared';

interface ProfileProps extends DrawerContentComponentProps {}

export const Profile = ({ navigation }: ProfileProps) => {
  const color = useThemeColor('colors.text');

  return (
    // <DrawerContentScrollView {...props} style={{ flex: 1 }}>
    <PageLayout>
      <DS.View flex={1}>
        <DS.View style={styles.header}>
          <DS.Text type="subtitle">My Wallet</DS.Text>
          <DS.Button type="plain" onPress={() => navigation.closeDrawer()} background={false}>
            <Ionicons name="chevron-forward" size={18} color={color} />
          </DS.Button>
        </DS.View>
        <DS.View flex={1}>
          <ProfileActions />
        </DS.View>
        <DS.View flex={3}>
          <Portfolio />
        </DS.View>
        <DS.View flex={1} style={styles.menu}>
          <ProfileMenu />
        </DS.View>
        {/* <DrawerItemList {...props} /> */}
        {/* </DrawerContentScrollView> */}
        <DS.Text>
          App Version: {Application.nativeApplicationVersion}-{Application.nativeBuildVersion}
        </DS.Text>
      </DS.View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    justifyContent: 'flex-start',
  },
});
