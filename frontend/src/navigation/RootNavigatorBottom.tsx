import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, SettingScreen } from './screen'
import TabBarItem from './TabBarItem'

const Tab = createBottomTabNavigator()


const RootNavigatorBottom = () => {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'home') {
          return <TabBarItem focused={focused} normalIcon={require('../assets/tab/home.png')} selectIcon={require('../assets/tab/ac_home.png')} />
        } else if (route.name === 'discover') {
          return <TabBarItem focused={focused} normalIcon={require('../assets/tab/discovery.png')} selectIcon={require('../assets/tab/ac_discovery.png')} />
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <Tab.Screen name="home" component={HomeScreen} options={{ tabBarBadge: 3, tabBarLabel: '首页' }} />
    <Tab.Screen name='discover' component={SettingScreen} options={{ tabBarLabel: '设置' }} />
  </Tab.Navigator>
}

export { RootNavigatorBottom }