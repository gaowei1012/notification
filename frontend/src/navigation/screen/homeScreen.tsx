import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/home/home';

const Stack = createNativeStackNavigator();

const HomeScreen: React.FC<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
