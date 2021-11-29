import React, { useEffect } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import { NavigatorUtils } from '../../utils'
import { Button } from 'react-native-elements'

const Home = (props: any) => {
  useEffect(() => {
    console.log('props=>', props)
  }, [])
  return (
    <SafeAreaView>
      <View>
        <Text>首页</Text>
        <Button buttonStyle={{ width: 120, alignSelf: 'center' }} onPress={() => NavigatorUtils.navigator(props.navigation, 'detail')} type='clear' title="home detail" />
      </View>
    </SafeAreaView>
  )
}

export default Home
