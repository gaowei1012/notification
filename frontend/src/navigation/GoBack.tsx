import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/goback';
import { back } from '../utils';

const GoBack: React.FC<{}> = () => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => back()}>
      <Image style={styles.back} source={require('../assets/icon/arrow_left.png')} />
    </TouchableOpacity>
  );
};

export default GoBack;
