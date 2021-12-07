
   
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { setToLeveNavigator } from '../utils'
import * as React from 'react'

import { RootNavigatorBottom } from './RootNavigatorBottom'
// Stack
// import { Login } from '../pages/users/login'
// import { Regsiter } from '../pages/users/register'

const Stack = createNativeStackNavigator()

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer
      ref={navigatorRef => setToLeveNavigator(navigatorRef)}
    >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='root' component={RootNavigatorBottom} />
        {/* <Stack.Screen name='login' component={Login} /> */}
        {/* <Stack.Screen name='register' component={Regsiter} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}