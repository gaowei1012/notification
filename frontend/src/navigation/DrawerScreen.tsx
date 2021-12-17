import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { HomeScreen } from './screen'

const Drawer = createDrawerNavigator()

const DrawerScreen: React.FC<any> = (props) => {
  return <Drawer.Navigator 
    initialRouteName='home'
    screenOptions={{
      headerShown: false
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
     <Drawer.Screen name="home" component={HomeScreen} />
  </Drawer.Navigator>
}

export default DrawerScreen

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}