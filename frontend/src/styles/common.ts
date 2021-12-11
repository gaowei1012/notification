import { StyleSheet } from 'react-native'

const commomStyles = StyleSheet.create({ 
  flexRowOrCentent: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center' 
  },
  flexColumnCentent: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center' 
  }
})

export { commomStyles }