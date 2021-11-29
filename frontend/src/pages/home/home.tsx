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
      </View>
    </SafeAreaView>
  )
}

export default Home
