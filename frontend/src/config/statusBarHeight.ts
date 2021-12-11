import { Platform } from 'react-native'

const NAV_BAR_H_IOS = 44
const NAV_BAR_H_ANDROID = 50

export const status_bar_h = Platform.OS === 'ios' ? 20 : null
export const nav_bar_h = Platform.OS === 'ios' ? NAV_BAR_H_IOS : NAV_BAR_H_ANDROID
