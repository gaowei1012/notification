import * as React from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import { px2dp, NavigatorUtils, TopNavigationBar } from '../../../utils'
import { styles } from '../../../styles/login'

const Login = (props: any) => {
  const _onBlurName = () => { }
  const onChangeMobile = (val: any) => { }
  const onChangePassword = (val: any) => { }
  const _onBlurPassword = () => { }
  const goRetrievePass = () => { }
  return (
    <SafeAreaView style={styles.loginContainer}>
      <TopNavigationBar title='登录' statusBar={{ backgroundColor: '#fff', barStyle: 'dark-content' }} style={{ backgroundColor: '#ffffff' }} />
      <View style={{ marginTop: px2dp(120) }}>
        <View style={styles.textInputBox}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={'请输入手用户名'}
            onChangeText={(val) => onChangeMobile(val)}
            placeholderTextColor={'#ccc'}
            // onFocus={this.handleFocus}
            onBlur={_onBlurName}
            autoCapitalize="none"
            maxLength={11}
            returnKeyType="next"
          />
        </View>
        <View style={styles.textInputBox}>
          <TextInput
            style={styles.textInputStyle}
            placeholder={'请输入密码'}
            onChangeText={(val) => onChangePassword(val)}
            placeholderTextColor={'#ccc'}
            // onFocus={this.handleFocus}
            secureTextEntry={true}
            onBlur={_onBlurPassword}
            autoCapitalize="none"
            maxLength={16}
            returnKeyType="done"
          />
        </View>
        <View style={styles.ftBt}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={goRetrievePass}
            style={styles.retrieveBox}>
            <Text style={styles.retrieveText}>忘记密码</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => NavigatorUtils.navigator(props.navigation, 'register')}
            style={styles.nowLoginBox}>
            <Text style={styles.nowText}>立即注册</Text>
          </TouchableOpacity>
        </View>
      </View>
      {Platform.OS == 'android' ? <View style={styles.submitBox}>
        <TouchableNativeFeedback
          onPress={() => { }}
        >
          <Text style={styles.saveAndroidText}>登录</Text>
        </TouchableNativeFeedback>
      </View> : <TouchableOpacity
        style={styles.submitBox}
        activeOpacity={1}
        onPress={() => { }}>
        <Text style={styles.saveText}>登录</Text>
      </TouchableOpacity>}
    </SafeAreaView>
  )
}

export default Login