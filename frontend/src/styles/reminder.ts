import { StyleSheet } from 'react-native'
import { commomStyles } from './common'
import { px2dp } from '../utils'

const { flex, defaultBackgroundColor } = commomStyles

const styles = StyleSheet.create({
  container: {
    ...flex,
    ...defaultBackgroundColor,
  },
  back: {
    width: px2dp(18),
    height: px2dp(18)
  },
  contentTitle: {
    marginLeft: px2dp(14),
    fontWeight: '600',
    color: '#8d96a0'
  },
  textInput: {
    width: px2dp(350),
    // height: px2dp(10),
    alignSelf: 'center',
    marginTop:px2dp(6),
    borderRadius: px2dp(6),
    borderBottomWidth: px2dp(1),
    borderBottomColor: '#ddd',
    padding: px2dp(8)
  },
  multilineTextInput: {
    width: px2dp(350),
    height: px2dp(120),
    alignSelf: 'center',
    marginTop:px2dp(12),
    borderRadius: px2dp(6),
    borderWidth: px2dp(1),
    borderColor: '#ddd',
    padding: px2dp(8)
  },
  inputContainer: {
    marginVertical: px2dp(10)
  },
  confirm: {
    width: px2dp(350),
    alignSelf: 'center',
    marginTop: px2dp(120)
  }
})

export { styles }