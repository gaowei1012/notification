import * as React from 'react'
import Toast from 'react-native-root-toast'

class RootToast {
  static toast: any

  static showToast(msg: string) {
    this.toast = Toast.show(msg, {
      position: 0,
      duration: 400,
    })
    setTimeout(() => {
      Toast.hide(this.toast)
    }, 400)
  }
}

export default RootToast
