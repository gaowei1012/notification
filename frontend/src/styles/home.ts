import { StyleSheet } from 'react-native'
import { commomStyles } from './common'
import { px2dp } from '../utils'

const { defaultBackgroundColor, flex, defaultSytle  } = commomStyles

const styles = StyleSheet.create({
  container: {
    ...flex,
    ...defaultSytle,
    ...defaultBackgroundColor
  },
  plus: {
    width: px2dp(24),
    height: px2dp(24)
  }
})

export { styles }
