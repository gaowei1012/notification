import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
// import PushNotificationIOS from '@react-native-community/push-notification-ios'
import CustomizeCalendar from '../../components/calendar'
import { Button, Card } from 'react-native-elements'
import { TopNavigationBar, navigate } from '../../utils'
import { styles } from '../../styles/home'


const Home = (props: any) => {

  // useEffect(() => {
  //   const type = 'notification';
  //   PushNotificationIOS.addEventListener(type, notification)
  //   return () => {
  //     PushNotificationIOS.removeEventListener(type)
  //   }
  // }, [])

  // // 测试推送
  // const notification = (notification: any) => {
  //   const actionaIdentifer = notification.getActionIdentifier()
  //   if (actionaIdentifer == 'open') {
  //     // Perform action based on open action
  //   }
  //   if (actionaIdentifer == 'text') {
  //     const userText = notification.getUserText()
  //     console.log('userText', userText)
  //     // Perform action based on textinput action
  //   }
  // }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='TODO' rightButton={<TouchableOpacity onPress={() => navigate('reminder')} activeOpacity={.8}>
        <Image style={styles.plus} resizeMode='cover' source={require('../../assets/icon/plus.png')} />
      </TouchableOpacity>} />
      <View style={styles.content}>
        <Image style={styles.bare} source={require('../../assets/icon/bare.png')} />
      </View>
      {/* <CustomizeCalendar /> */}
    </SafeAreaView>
  )
}

export default Home
