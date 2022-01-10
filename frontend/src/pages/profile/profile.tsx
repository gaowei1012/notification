import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { styles } from '../../styles/profile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate, TopNavigationBar, getPlatform } from '../../utils';
import { IProfileType } from '../../types/profileTypes';

const Profile: React.FC<IProfileType> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name, setName] = useState<string>('');
  const handleSubmit = () => {
    name ? '' : navigate('login');
  };
  const avatarCom = () => {
    return (
      <>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('../../assets/icon/avatar.png')} />
          <Text style={styles.username}>{name ? name : '未登录'}</Text>
        </View>
        <Image style={styles.arrowRight} source={require('../../assets/icon/arrow_right.png')} />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title='个人中心' />
      {getPlatform() ? (
        <TouchableOpacity onPress={handleSubmit} activeOpacity={0.7} style={styles.header}>
          {avatarCom()}
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableNativeFeedback>{avatarCom()}</TouchableNativeFeedback>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
