import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../../pages/home'
import Detail from '../../pages/home/detail'

const Stack = createNativeStackNavigator()

const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='detail' component={Detail} />
    </Stack.Navigator>
  )
}

export { HomeScreen }