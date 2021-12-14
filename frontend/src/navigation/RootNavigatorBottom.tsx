import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, ProfileScreen } from './screen'
import TabBarItem from './TabBarItem'

const Tab = createBottomTabNavigator()


const RootNavigatorBottom: React.FC<{}> = () => {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'home') {
          return <TabBarItem focused={focused} normalIcon={require('../assets/tab/home.png')} selectIcon={require('../assets/tab/ac_home.png')} />
        } else if (route.name === 'profile') {
          return <TabBarItem focused={focused} normalIcon={require('../assets/tab/dynamic.png')} selectIcon={require('../assets/tab/ac_dynamic.png')} />
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <Tab.Screen name="home" component={HomeScreen} options={{ tabBarLabel: '首页' }} />
    <Tab.Screen name='profile' component={ProfileScreen} options={{ tabBarLabel: '我的' }} />
  </Tab.Navigator>
}

export { RootNavigatorBottom }