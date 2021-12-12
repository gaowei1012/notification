import React from 'react'
import { View, SafeAreaView, Text, TextInput } from 'react-native'
import { IReminderProps } from '../../types/reminder'
import { back, TopNavigationBar } from '../../utils'
import { Button } from 'react-native-elements'
import { styles } from '../../styles/reminder'
import GoBack from '../../navigation/GoBack'

const Reminder: React.FC<IReminderProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={<GoBack/> } title='添加提醒' />
      <View style={styles.inputContainer}>
        <Text style={styles.contentTitle}>提醒标题:</Text>
        <TextInput
          style={styles.textInput}
          placeholder='请输入事项标题'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.contentTitle}>提醒内容:</Text>
        <TextInput
          style={styles.multilineTextInput}
          placeholder='请输入事项内容'
          multiline={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.contentTitle}>开始时间:</Text>
        
      </View>
      <Button activeOpacity={.8} onPress={() => back()} style={styles.confirm} title='添加'/>
    </SafeAreaView>
  )
}

export default Reminder
