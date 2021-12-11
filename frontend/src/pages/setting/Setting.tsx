import * as React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { NavigatorUtils } from '../../utils'

const Settings = (props: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>设置</Text>
        <Button onPress={() => NavigatorUtils.navigator(props.navigation, 'login')} type='clear' title="login" />
      </View>
    </SafeAreaView>
  )
}

export default Settings
