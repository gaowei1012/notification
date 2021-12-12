import { StyleSheet } from 'react-native'
import { commomStyles } from './common'
import { px2dp } from '../utils'

const { flex, defaultBackgroundColor } = commomStyles

const styles = StyleSheet.create({
  container: {
    ...flex,
    ...defaultBackgroundColor
  },
  back: {
    width: px2dp(18),
    height: px2dp(18)
  }
})

export { styles }