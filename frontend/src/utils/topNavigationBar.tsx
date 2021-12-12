
import React from 'react'
import { styles } from '../styles/topNavigationBar'
import { View, Text, StatusBar } from 'react-native'
import { topNavigationBarType } from '../types/topNavigationBarType'

const TopNavigationBar: React.FC<topNavigationBarType> = (props) => {
  const { style, statusBar, rightButton, titleLayoutStyle, leftButton, hide, titleView, color, fontSize, title } = props
  const getButtonElement = (ele: any) => {
    return <View style={styles.navBarButton}>{ele ? ele : null}</View>;
  }
  return (
    <View style={[styles.container, style]}>
      {!statusBar?.hiddle ? <View style={styles.statusBar}>
        <StatusBar {...statusBar} />
      </View> : null}
      {!hide ? <View style={styles.navBar}>
        <View style={styles.leftBtnBox}>
          {getButtonElement(leftButton)}
        </View>
        <View
          style={[styles.navBarTitleContainer, titleLayoutStyle]}>
          {titleView ? <>{titleView}</> : <Text
            numberOfLines={1}
            style={[styles.title, { color, fontSize, }]}>
            {title}
          </Text>}
        </View>
        <View style={styles.rightBtnBox}>
          {getButtonElement(rightButton)}
        </View>
      </View> : null}
    </View>
  )
}

export default TopNavigationBar