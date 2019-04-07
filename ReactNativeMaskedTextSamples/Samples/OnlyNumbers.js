import React from 'react'
import { View, Text } from 'react-native'
import TextInputMask from '../lib/text-input-mask'

import { textInputStype, container } from './styles'

export default class OnlyNumbers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>Only Numbers</Text>
        <TextInputMask
          type={'only-numbers'}
          value={this.state.value}
          onChangeText={text => {
            this.setState({
              value: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}