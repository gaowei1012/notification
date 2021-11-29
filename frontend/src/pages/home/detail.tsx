import * as React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { RootToast } from '../../utils'
import Modal from 'react-native-modal'


const Detail = () => {
  return (
    <SafeAreaView>
      <Text>detail</Text>
      <Button title='show toast' onPress={() => {
        RootToast.showToast('show toast')
      }} />
      {/* <Modal isVisible={true}>
        <View style={{flex: 1}}>
          <Text>hello modal</Text>
        </View>
      </Modal> */}
    </SafeAreaView>
  )
}

export default Detail
