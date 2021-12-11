import { StyleSheet } from 'react-native'
import { commomStyles } from './common'

const { flexRowOrCentent } = commomStyles

const styles = StyleSheet.create({
  container: {
    ...flexRowOrCentent
  }
})

export { styles }
