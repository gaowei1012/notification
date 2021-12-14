import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from '../../pages/setting/setting'

const Stack = createNativeStackNavigator()

const SettingScreen: React.FC<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='setting' component={Settings} />
    </Stack.Navigator>
  )
}

export default SettingScreen