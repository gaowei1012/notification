import { StyleSheet } from 'react-native'
import { commomStyles } from './common'
import baseColor from './baseColor'
import { px2dp } from '../utils'

const { defaultBackgroundColor, flex, flexRowOrBetween, flexRowOrCentent } = commomStyles
const styles = StyleSheet.create({
  container: {
    ...flex,
    ...defaultBackgroundColor
  },
  header: {
    ...flexRowOrBetween,
    width: px2dp(345)
  },
  avatarContainer: {
    ...flexRowOrCentent,
  },
  avatar: {
    width: px2dp(60),
    height: px2dp(60),
    borderRadius: px2dp(30)
  },
  username: {
    marginLeft: px2dp(8),
    fontSize: px2dp(16)
  },
  arrowRight: {
    width: px2dp(16),
    height: px2dp(16)
  }
})

export { styles }