import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setToLeveNavigator } from '../utils';
import * as React from 'react';

import { RootNavigatorBottom } from './RootNavigatorBottom';
// Stack
import Reminder from '../pages/home/reminder';
import { Login, Register } from '../pages/user';

const Stack = createNativeStackNavigator();

export default function DynamicTabNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigatorRef => setToLeveNavigator(navigatorRef)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='root' component={RootNavigatorBottom} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='register' component={Register} />
          <Stack.Screen name='reminder' component={Reminder} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
