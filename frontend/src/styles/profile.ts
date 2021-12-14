import { StyleSheet } from 'react-native'
import { commomStyles } from './common'
import baseColor from './baseColor'
import { px2dp } from '../utils'

const { defaultBackgroundColor, flex, } = commomStyles
const styles = StyleSheet.create({
  container: {
    ...flex,
    ...defaultBackgroundColor
  }
})

export { styles }