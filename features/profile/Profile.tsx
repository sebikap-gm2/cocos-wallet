import React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DS } from '@/design-system';
import { useQuery } from '@tanstack/react-query';
import { portfolioService } from '@/services';
import { PortfolioItem } from '../portfolio';
import * as Application from 'expo-application';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ProfileMenu } from './ProfileMenu';

interface ProfileProps extends DrawerContentComponentProps { }

export const Profile = ({ navigation }: ProfileProps) => {
  const query = useQuery({ queryKey: ['portfolio'], queryFn: portfolioService.getPortfolio });
  const color = useThemeColor('colors.text');

  return (
    // <DrawerContentScrollView {...props} style={{ flex: 1 }}>
    <DS.PageLayout>
      <DS.View style={styles.header}>
        <DS.Text type='subtitle'>My Wallet</DS.Text>
        <DS.Button
          type='plain'
          onPress={() => navigation.closeDrawer()}
          background={false}
        >
          <Ionicons
            name='chevron-forward'
            size={18}
            color={color}
          />
        </DS.Button>
      </DS.View>
      <DS.View flex={2}>
        <DS.View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <DS.View flex={1}><DS.Text bold center>Ticker</DS.Text></DS.View>
          <DS.View flex={1}><DS.Text bold center>Quantity</DS.Text></DS.View>
          <DS.View flex={1}><DS.Text bold center>Avg</DS.Text></DS.View>
          <DS.View flex={1}><DS.Text bold center>Close</DS.Text></DS.View>
          <DS.View flex={1}><DS.Text bold center>Last</DS.Text></DS.View>
        </DS.View>
        <FlatList
          data={query.data}
          renderItem={({ item, index }) => <PortfolioItem item={item} bg={index % 2 === 0} />}
          style={{ flex: 1 }}
        />
      </DS.View>
      <ProfileMenu />
      {/* <DrawerItemList {...props} /> */}
      {/* </DrawerContentScrollView> */}
      <DS.Text>App Version: {Application.nativeBuildVersion}</DS.Text>
    </DS.PageLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
