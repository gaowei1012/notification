import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen } from './screen';
import TabBarItem from './TabBarItem';

const Tab = createBottomTabNavigator();

const RootNavigatorBottom: React.FC<{}> = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'home') {
            return <TabBarItem focused={focused} normalIcon={require('../assets/tab/home.png')} selectIcon={require('../assets/tab/ac_home.png')} />;
          } else if (route.name === 'profile') {
            return <TabBarItem focused={focused} normalIcon={require('../assets/tab/dynamic.png')} selectIcon={require('../assets/tab/ac_dynamic.png')} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name='home' component={HomeScreen} options={{ tabBarBadge: 3, tabBarLabel: '้ฆ้กต' }} />
      <Tab.Screen name='profile' component={ProfileScreen} options={{ tabBarLabel: 'ๆ็' }} />
    </Tab.Navigator>
  );
};

export { RootNavigatorBottom };
