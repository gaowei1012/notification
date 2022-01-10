import { StyleSheet } from 'react-native';
import { commomStyles } from './common';
import baseColor from './baseColor';
import { px2dp } from '../utils';

const { defaultBackgroundColor, flex } = commomStyles;
const styles = StyleSheet.create({
  registerCotainer: {
    ...flex,
    ...defaultBackgroundColor,
  },
  titleBox: {
    marginLeft: px2dp(28),
    marginTop: px2dp(16),
  },
  title: {
    fontSize: px2dp(28),
    color: baseColor.dfontColor,
  },
  terms: {
    flexDirection: 'row',
    marginTop: px2dp(6),
  },
  termsText: {
    color: '#3995F8',
    fontSize: px2dp(14),
  },
  noTerms: {
    color: '#505559',
    fontSize: px2dp(14),
  },
  textInputWrap: {
    marginTop: px2dp(30),
  },
  textInputBox: {
    marginTop: px2dp(20),
    width: px2dp(315),
    height: px2dp(36),
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: px2dp(6),
    justifyContent: 'space-between',
    borderRadius: px2dp(3),
  },
  sendCode: {
    width: px2dp(80),
    height: px2dp(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: px2dp(20),
  },
  sendText: {
    color: '#fff',
    fontWeight: '600',
  },
  submitBox: {
    marginTop: px2dp(97),
    width: px2dp(313),
    height: px2dp(40),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2C7CC',
    borderRadius: px2dp(3),
  },
  activeSubmitBox: {
    backgroundColor: 'rgba(77, 171, 109, 0.99)',
  },
  saveText: {
    color: '#fff',
    fontSize: px2dp(15),
    fontWeight: '500',
  },
  acTitleBox: {
    marginTop: px2dp(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  acTitleText: {
    fontSize: px2dp(14),
    color: '#505559',
  },
  timerBox: {
    marginTop: px2dp(13),
    width: px2dp(315),
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  timerText: {
    color: '#505559',
    fontSize: px2dp(12),
    opacity: 0.8,
  },
  // 设置密码
  settingBox: {
    marginTop: px2dp(46),
    marginLeft: px2dp(31),
  },
  settingTitle: {
    color: '#000',
    fontSize: px2dp(28),
  },
  passwordDesc: {
    fontSize: px2dp(14),
    color: '#505559',
    marginTop: px2dp(6),
  },
  passwordTextInput: {
    marginTop: px2dp(37),
    width: px2dp(300),
    alignSelf: 'center',
  },
  passwordItem: {
    height: px2dp(37),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#B8B8B8',
    borderBottomWidth: px2dp(0.5),
    paddingLeft: px2dp(6),
    marginBottom: px2dp(31),
  },
  passwordSubmitBox: {
    marginTop: px2dp(52),
    width: px2dp(313),
    height: px2dp(44),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2C7CC',
  },
  activepasswordSubmitBox: {
    backgroundColor: 'rgba(77, 171, 109, 0.99)',
  },
  loginText: {
    color: '#101010',
    fontSize: px2dp(28),
    marginLeft: px2dp(31),
    marginTop: px2dp(46),
  },
  loginDesc: {
    marginTop: px2dp(6),
    marginLeft: px2dp(33),
    color: '#505559',
    fontSize: px2dp(14),
  },
  loginBtnBox: {
    marginTop: px2dp(300),
    width: px2dp(313),
    height: px2dp(44),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(77, 171, 109, 0.99)',
  },
});

export { styles };
