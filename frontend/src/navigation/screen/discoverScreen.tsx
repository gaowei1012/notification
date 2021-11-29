import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Discover } from '../../pages/discover'

const Stack = createNativeStackNavigator()

const DiscoverScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='discover' component={Discover} />
    </Stack.Navigator>
  )
}

export { DiscoverScreen }