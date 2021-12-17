import React from 'react'
import { View, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screen';

const Drawer = createDrawerNavigator()

const DrawerScreen: React.FC<{}> = () => {
  return <Drawer.Navigator initialRouteName='home'>
     <Drawer.Screen name="home" component={HomeScreen} />
     <Drawer.Screen name="ntification" component={NotificationsScreen} />
  </Drawer.Navigator>
}

export default DrawerScreen

function NotificationsScreen(navigation: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}