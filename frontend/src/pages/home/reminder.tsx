import React, { useState } from 'react'
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'
import { IReminderProps } from '../../types/reminder'
import { back, TopNavigationBar } from '../../utils'
import DatePicker from 'react-native-date-picker'
import { Button } from 'react-native-elements'
import { styles } from '../../styles/reminder'
import GoBack from '../../navigation/GoBack'
import moment from 'moment'

const Reminder: React.FC<IReminderProps> = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState<boolean>(false)
  const [start_date, setStartDate] = useState<any>('请选择提醒时间')

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={<GoBack />} title='添加提醒' />
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
        <TouchableOpacity style={styles.dateSelect} activeOpacity={.8} onPress={() => setOpen(true)}>
          <Text style={styles.dateText}>{start_date}</Text>
        </TouchableOpacity>
        <DatePicker
          title='选择开始时间'
          modal
          open={open}
          date={date}
          locale={'zh_cn'}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            setStartDate(moment(date).format('YYYY-MM-DD HH:MM:SS'))
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </View>
      <Button activeOpacity={.8} onPress={() => back()} style={styles.confirm} title='添加' />
    </SafeAreaView>
  )
}

export default Reminder
