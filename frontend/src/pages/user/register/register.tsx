import React, { useState } from 'react'
import { styles } from '../../../styles/register'
import { TopNavigationBar } from '../../../utils'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'

const Regsiter = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.registerCotainer}>
      <TopNavigationBar statusBar={{ backgroundColor: '#fff', barStyle: 'dark-content' }} style={{ backgroundColor: '#ffffff' }} />
      <View style={styles.titleBox}>
        <Text style={styles.title}>输入手机号码</Text>
        <View style={styles.terms}>
          <Text style={styles.noTerms}>注册即代表阅读并同意</Text>
          <TouchableOpacity activeOpacity={1} onPress={() => { }}>
            <Text style={styles.termsText}>使用条款</Text>
          </TouchableOpacity>
          <Text style={styles.noTerms}>与</Text>
          <TouchableOpacity activeOpacity={1} onPress={() => { }}>
            <Text style={styles.termsText}>隐私政策</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textInputWrap}>
        <View style={styles.textInputBox}>
          <TextInput
            placeholder={'请输入手机号'}
            onChangeText={() => { }}
            placeholderTextColor={'#ccc'}
            // onFocus={handleFocus}
            onBlur={() => { }}
            keyboardType="number-pad"
            returnKeyType="next"
            returnKeyLabel="next" // 兼容 android
            maxLength={11} // 只能输入十一位数字手机号码
          />
        </View>
        <View style={styles.textInputBox}>
          <TextInput
            placeholder={'请输入短信中的验证码'}
            onChangeText={() => { }}
            placeholderTextColor={'#ccc'}
            // onFocus={handleCodeFocus}
            clearTextOnFocus={true}
            onBlur={() => { }}
            keyboardType="numeric"
            returnKeyType="done"
            returnKeyLabel="done" // 兼容 andriod
            maxLength={6} // 只能输入6数字位验证码
          />
          <TouchableOpacity
            style={styles.sendCode}
            activeOpacity={1}
            onPress={() => { }}
            disabled={disabled}>
            <View style={styles.timerBox}>
              <Text style={styles.timerText}>
                {count ? `${count}秒后获取` : '获取验证码'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.submitBox, isFocus ? styles.activeSubmitBox : null]}
        activeOpacity={1}
        onPress={() => { }}>
        <Text style={styles.saveText}>下一步</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Regsiter