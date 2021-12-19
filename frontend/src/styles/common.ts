import { StyleSheet } from 'react-native'
import { height, px2dp, width } from '../utils'
import baseColor from './baseColor'

const commomStyles = StyleSheet.create({ 
  flex: {
    flex: 1,
  },
  flexRowOrBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  flexRowOrCentent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexColumnCentent: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center' 
  },
  defaultSytle: {
    width: width,
    height: height
  },
  defaultBackgroundColor: {
    backgroundColor: baseColor.defaultColor
  },
  defaultFontStyle: {
    fontSize: baseColor.dfontSize,
    color: baseColor.dfontColor,
  }
})

export { commomStyles }