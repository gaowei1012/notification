import React from 'react'
import { Image } from 'react-native'
import { ITabBarItemType } from '../types/tabBarItemType'

const TabBarItem: React.FC<ITabBarItemType> = (props) => {
  const imgUrl: any = props.focused? props.selectIcon : props.normalIcon
  return (
    <Image resizeMode='contain' style={{ tintColor: props.tintColor, width: 25, height: 25 }} source={imgUrl} />
  )
}

export default TabBarItem
