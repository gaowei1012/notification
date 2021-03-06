/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { TopNavigationBar, navigate } from '../../utils';
import { styles } from '../../styles/home';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [orgData, setOrgData] = useState<any>([]);
  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, notification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  }, []);

  // 测试推送
  const notification = (notification: any) => {
    const actionaIdentifer = notification.getActionIdentifier();
    if (actionaIdentifer == 'open') {
      // Perform action based on open action
    }
    if (actionaIdentifer == 'text') {
      const userText = notification.getUserText();
      console.log('userText', userText);
      // Perform action based on textinput action
    }
  };

  useEffect(() => {
    DeviceEventEmitter.addListener('back', function (data) {
      let _org = [...orgData];
      _org.push(data);
      setOrgData(_org);
    });
  }, []);

  const rightButton = () => (
    <TouchableOpacity onPress={() => navigate('reminder')} activeOpacity={0.8}>
      <Image style={styles.plus} resizeMode='cover' source={require('../../assets/icon/plus.png')} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='TODO' rightButton={rightButton()} />
      <View style={styles.content}>
        <Image style={styles.bare} source={require('../../assets/icon/bare.png')} />
      </View>
      {console.log('orgData', orgData)}
      {/* <CustomizeCalendar /> */}
    </SafeAreaView>
  );
};

export default Home;
