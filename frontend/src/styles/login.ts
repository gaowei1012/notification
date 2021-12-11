import { StyleSheet } from 'react-native';
import { px2dp } from '../utils/px2dp';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  submitBox: {
    marginTop: px2dp(50),
    width: px2dp(313),
    height: px2dp(40),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: px2dp(3),
    justifyContent: 'center',
    backgroundColor: 'rgba(77, 171, 109, 0.99)',
  },
  saveAndroidText: {
    color: '#fff',
    fontSize: px2dp(15),
    fontWeight: '500',
    width: px2dp(313),
    height: px2dp(40),
    lineHeight: px2dp(40),
    paddingTop: px2dp(2),
    textAlign: 'center',
  },
  saveText: {
    color: '#fff',
    fontSize: px2dp(15),
    fontWeight: '500',
  },
  ftBt: {
    marginTop: px2dp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nowLoginBox: {
    marginTop: px2dp(6),
    marginRight: px2dp(26),
  },
  nowText: {
    color: '#098643',
    fontSize: px2dp(14),
    marginRight: px2dp(4),
  },
  retrieveBox: {
    marginTop: px2dp(6),
    marginLeft: px2dp(26),
  },
  retrieveText: {
    color: '#098643',
    fontSize: px2dp(14),
    marginLeft: px2dp(4),
  },
  // 输入框
  textInputBox: {
    marginTop: px2dp(20),
    width: px2dp(315),
    height: px2dp(36),
    alignSelf: 'center',
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: px2dp(6),
    borderRadius: px2dp(3),
    justifyContent: 'space-between',
  },
  textInputStyle: {
    width: px2dp(200),
  },
});

export { styles }

