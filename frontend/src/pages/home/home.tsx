import React, { useEffect } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { Button } from 'react-native-elements'

const Home = (props: any) => {

  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, notification)
    return () => {
      PushNotificationIOS.removeEventListener(type)
    }
  }, [])

  // 测试推送
  const notification = (notification: any) => {
    const actionaIdentifer = notification.getActionIdentifier()
    if (actionaIdentifer == 'open') {
      // Perform action based on open action
    }
    if (actionaIdentifer == 'text') {
      const userText = notification.getUserText()
      console.log('userText', userText)
      // Perform action based on textinput action
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text>首页</Text>
        <Button title='推送测试' type='solid' onPress={notification} />
      </View>
    </SafeAreaView>
  )
}

export default Home
