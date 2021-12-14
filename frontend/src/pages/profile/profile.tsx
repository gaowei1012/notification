import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from '../../styles/profile'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigatorUtils, TopNavigationBar } from '../../utils'
import { IProfileType } from '../../types/profileTypes'

const Profile: React.FC<IProfileType> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='个人中心' />
      <View>
        <Button onPress={() => NavigatorUtils.navigator(props.navigation, 'login')} type='clear' title="login" />
      </View>
    </SafeAreaView>
  )
}

export default Profile
