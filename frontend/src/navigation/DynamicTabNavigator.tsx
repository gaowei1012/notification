import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarItem from './TabBarItem'
import * as React from 'react'

import { Settings } from '../pages/setting'
import { HomeScreen, DiscoverScreen } from './screen'

const Tab = createBottomTabNavigator()

// 子路由跳转方法
// https://reactnavigation.org/docs/tab-based-navigation

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'home') {
              return <TabBarItem focused={focused} normalIcon={require('../assets/tab/home.png')} selectIcon={require('../assets/tab/ac_home.png')} />
            } else if (route.name === 'discover') {
              return <TabBarItem focused={focused} normalIcon={require('../assets/tab/discovery.png')} selectIcon={require('../assets/tab/ac_discovery.png')} />
            } else if (route.name === 'settings') {
              return <TabBarItem focused={focused} normalIcon={require('../assets/tab/dynamic.png')} selectIcon={require('../assets/tab/ac_dynamic.png')} />
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="home" component={HomeScreen} options={{ tabBarBadge: 3, tabBarLabel: '首页' }} />
        <Tab.Screen name='discover' component={DiscoverScreen} options={{ tabBarLabel: '发现' }}/>
        <Tab.Screen name="settings" component={Settings} options={{ tabBarLabel: '设置' }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}