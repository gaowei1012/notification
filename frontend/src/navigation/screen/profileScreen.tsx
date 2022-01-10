import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../pages/profile/profile';

const Stack = createNativeStackNavigator();

const ProfileScreen: React.FC<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='profile' component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
