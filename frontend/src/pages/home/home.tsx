import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import PushNotificationIOS from '@react-native-community/push-notification-ios'
import CustomizeCalendar from '../../components/calendar'
import { TopNavigationBar, navigate } from '../../utils'
import { styles } from '../../styles/home'


const Home: React.FC<{}> = (props) => {

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

  const rightButton = () => (
    <TouchableOpacity onPress={() => navigate('reminder')} activeOpacity={.8}>
      <Image style={styles.plus} resizeMode='cover' source={require('../../assets/icon/plus.png')} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='TODO' rightButton={rightButton()} />
      <View style={styles.content}>
        <Image style={styles.bare} source={require('../../assets/icon/bare.png')} />
      </View>
      {/* <CustomizeCalendar /> */}
    </SafeAreaView>
  )
}

export default Home
