import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class MyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dt: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>Datetime</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'YYYY/MM/DD'
          }}
          value={this.state.dt}
          onChangeText={text => {
            this.setState({
              dt: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}