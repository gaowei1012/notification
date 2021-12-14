import * as React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from '../../styles/setting'
import { NavigatorUtils, TopNavigationBar } from '../../utils'

const Settings = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='个人中心'/>
      <View>
        <Button onPress={() => NavigatorUtils.navigator(props.navigation, 'login')} type='clear' title="login" />
      </View>
    </SafeAreaView>
  )
}

export default Settings
