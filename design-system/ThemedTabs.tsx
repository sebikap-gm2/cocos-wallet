import { useThemeColor } from '@/hooks/useThemeColor';
import React, { ReactNode, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

type Tab = {
  // id: string
  title: string
  // content: JSX.Element
}

interface ThemedTabsProps {
  options: Tab[]
  selectedValue: string
  setSelectedValue: (newValue: string) => void
}

export const ThemedTabs = ({ options, selectedValue, setSelectedValue }: ThemedTabsProps) => {
  const animation = new Animated.Value(0);
  const color = useThemeColor('text.primary')
  const backgroundColor = useThemeColor('background.primary')

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: selectedValue === options[0].title ? 0 : width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [selectedValue]);


  // const Content = options[activeTabIndex].content;

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {options.map((option, index) => {
          const selected = selectedValue === option.title;
          return (
            <TouchableOpacity
              key={option.title}
              style={[styles.tab, selected && { backgroundColor }]}
              onPress={() => setSelectedValue(option.title)}
            >
              <Text style={[styles.tabText, selected && { color }]}>{option.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Animated View */}
      {/* <Animated.View
        style={[
          styles.contentContainer,
          {
            transform: [{ translateX: animation }],
          },
        ]}
      >
        {options[activeTabIndex].content}
        {/* {activeTabIndex === 'tab1' ? ( */}
      {/* <View style={styles.tabContent}>
          {Content}
          <Text style={styles.contentText}>Content for Tab 1</Text>
        </View> */}
      {/* ) : ( */}
      {/* <View style={styles.tabContent}> */}
      {/* <Text style={styles.contentText}>Content for Tab 2</Text> */}
      {/* </View> */}
      {/* )} */}
      {/* </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 20
  },
  tab: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    borderRadius: 10
  },
  activeTab: {
    backgroundColor: '#4caf50',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    width: width * 2, // Two tabs with width of the screen
  },
  tabContent: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },
});
