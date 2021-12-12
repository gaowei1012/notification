import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import { IReminderProps } from '../../types/reminder'
import { styles } from '../../styles/reminder'
import { TopNavigationBar } from '../../utils'
import GoBack from '../../navigation/GoBack'

const Reminder: React.FC<IReminderProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={<GoBack/> } title='添加提醒' />
      <View>
        <Text>添加提醒</Text>
      </View>
    </SafeAreaView>
  )
}

export default Reminder
