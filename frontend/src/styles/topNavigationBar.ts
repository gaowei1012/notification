import { StyleSheet } from 'react-native'
import { nav_bar_h} from '../config/statusBarHeight'
import { px2dp } from '../utils'

const styles = StyleSheet.create({
  navBar: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-around',
    height: nav_bar_h, // 根据平台设置高度
    paddingHorizontal: px2dp(15),
  },
  navBarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navBarButton: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#85DFD2', // 设置背景颜色
  },
  title: {
    width: px2dp(200),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusBar: {
    //height: STATUS_BAR_H,
  },
  leftBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    width: px2dp(50),
    // height: NAV_BAR_H, // 根据平台设置高度
  },
  rightBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    width: px2dp(60),
  },
});

export { styles }