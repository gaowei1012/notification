import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { IReminderProps } from '../../types/reminder';
import { TopNavigationBar, back } from '../../utils';
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-elements';
import { styles } from '../../styles/reminder';
import GoBack from '../../navigation/GoBack';
import moment from 'moment';

const Reminder: React.FC<IReminderProps> = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [start_date, setStartDate] = useState<any>('请选择提醒时间');
  const [orgData, setOrgData] = useState<any>({
    title: '',
    content: '',
    start_date: '',
  });

  const handleChangeReminder = (val: string, key: string) => {
    orgData[key] = val;
    setOrgData(orgData);
  };

  const handleChangeSelectedDate = (date: any, key: string) => {
    setOpen(false);
    setDate(date);
    orgData[key] = moment(date).format('YYYY-MM-DD HH:MM:SS');
    setOrgData(orgData);
    setStartDate(moment(date).format('YYYY-MM-DD HH:MM:SS'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={<GoBack />} title='添加提醒' />
      <View style={styles.inputContainer}>
        <Text style={styles.contentTitle}>提醒标题:</Text>
        <TextInput style={styles.textInput} placeholder='请输入事项标题' returnKeyType='next' onChangeText={(val: string) => handleChangeReminder(val, 'title')} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.contentTitle}>开始时间:</Text>
        <TouchableOpacity style={styles.dateSelect} activeOpacity={0.8} onPress={() => setOpen(true)}>
          <Text style={styles.dateText}>{start_date}</Text>
        </TouchableOpacity>
        <DatePicker
          title='选择开始时间'
          modal
          open={open}
          date={date}
          locale={'zh_cn'}
          onConfirm={date => handleChangeSelectedDate(date, 'start_date')}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.contentTitle}>提醒内容:</Text>
        <TextInput
          style={styles.multilineTextInput}
          placeholder='请输入事项内容'
          multiline={true}
          returnKeyType='done'
          blurOnSubmit={true}
          onChangeText={(val: string) => handleChangeReminder(val, 'content')}
        />
      </View>
      <Button
        activeOpacity={0.8}
        onPress={async () => {
          back();
          DeviceEventEmitter.emit('back', orgData);
        }}
        style={styles.confirm}
        title='添加'
      />
    </SafeAreaView>
  );
};

export default Reminder;
