import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { styles } from '../../styles/profile'
import { SafeAreaView } from 'react-native-safe-area-context'
import { navigate, TopNavigationBar } from '../../utils'
import { IProfileType } from '../../types/profileTypes'

const Profile: React.FC<IProfileType> = (props) => {
  const [name, setName] = useState<string>('')
  const handleSubmit = () => {
    name ? '' : navigate('login')
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='个人中心' />
      <TouchableOpacity onPress={handleSubmit} activeOpacity={.7} style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('../../assets/icon/avatar.png')} />
          <Text style={styles.username}>{name ? name : '未登录'}</Text>
        </View>
        <Image style={styles.arrowRight} source={require('../../assets/icon/arrow_right.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile
